const objects = require('../../pageObjects/oobe.page');
const expected = require('../../data/expected');
// const methods = require('../../helpers/methods');
const expect = require('chai').expect;

describe('OOBE FLOW', ()=>{
    // Execute a block of code before every test
    beforeEach(() => {
    });

    describe('OOBE FastPair test suite', () => {

        it('TC-001 | Halfsheet pairing notification shoud be shown on screen', async ()=>{
            await (await (objects.connectBtn)).waitForDisplayed({ timeout: 5000 });
        });

        it('TC-002 | Stretto should be paired after "Connect" Btn click', async ()=>{
            await (await (objects.connectBtn)).click()
            await (await (objects.setupDevice)).isDisplayed();
            text = await (await objects._setupDeviceHalfsheet(0)).getText();
            expect(text).equal(expected.setupDeviceHalfsheet.title);
        });

        it('TC-003 | "Set Up" notification should be shown on screen and clickable', async ()=>{
            await (await (objects.setupBtn)).waitForDisplayed({ timeout: 5000 });
            await (await (objects.setupBtn)).click();
        });

        it('TC-004 | Link Pixel Buds with "user\'s acc name" message should be shown on screen', async ()=>{
            await (await (objects.linkPixelMsg)).waitForDisplayed({ timeout: 12000 });
            text = await (await objects._setupDeviceHalfsheet(0)).getText();
            expect(text).equal(expected.linkPixelBuds.msg);
        });

        it('TC-005 | Link Pixel Buds with... "OK" button should send user to OOBE Welcome screen', async ()=>{
            await (await (objects.okBtn)).click();
        });

        // Case skipped FAIL, CANCEL button not clickable
        it.skip('TC-006 | Link Pixel Buds with... "CANCEL" button should cancel OOBE flow', async ()=>{
            await (await (objects.cancelBtn)).click();
        });

        it('TC-007 | "Start setup" > "I accept" > "Next" > "Next" buttons click', async ()=>{
        let multipleClick;
            for (i = 0; i < 4; i++){
                //4 clicks the buttons
                await (await (objects.oobeActionBtn)).click();
            };  return multipleClick;

        });

        it('TC-008 | Continue OOBE flow .........', async ()=>{
            let multipleClick;
            await (await (objects.oobeActionBtn)).click();
            await (await (objects.oobeActionBtn)).waitForDisplayed({ timeout: 7000 });
            for (i = 0; i < 6; i++){
                //6 clicks the buttons
                await (await (objects.oobeActionBtn)).click();
            };  return multipleClick;

        });

    });

    describe('Assistant flow test suite', () => {

        it('TC-009 | Assistant flow can be completed', async ()=>{
        await (await (objects.continueBtn)).click();
        await (await (objects.nextBtn)).waitForDisplayed({ timeout: 5000 });
            await driver.touchAction([
                { action: 'tap', x: 595, y: 1335 },
                { action: 'wait', ms: 1000 },
                { action: 'tap', x: 595, y: 1335 },
                { action: 'wait', ms: 1000 },
                { action: 'tap', x: 595, y: 1335 },
                { action: 'wait', ms: 1000 },
                { action: 'tap', x: 595, y: 1335 },
                { action: 'wait', ms: 1000 },
                { action: 'tap', x: 595, y: 1335 },

            ]);

        });

    });

    // Execute a block of code after every test
    afterEach(() => {
        driver.reset();
    });

});
