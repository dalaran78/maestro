const objects = require('../../pageObjects/oobe.page');
// const data = require('../../data/data');
const expected = require('../../data/expected');
const expect = require('chai').expect;

describe('OOBE FastPair test suite', ()=>{
    // Execute a block of code before every test
    beforeEach(() => {
    });

    it('TC-001 | Halfsheet pairing notification shoud be shown on screen', async ()=>{
        await (await (objects.connectBtn)).waitForDisplayed({ timeout: 5000 });
    });

    it('TC-002 | Stretto should be paired after "Connect" button click', async ()=>{
        await (await (objects.connectBtn)).click()
        await (await (objects.setupDevice)).isDisplayed();
        text = await (await objects._setupDeviceHalfsheet(0)).getText();
        expect(text).equal(expected.setupDeviceHalfsheet.title);
    });

    it('TC-003 | Link Pixel Buds with "user\'s acc name" message should be shown on screen', async ()=>{
        await (await (objects.linkPixelMsg)).isDisplayed();
        text = await (await objects._setupDeviceHalfsheet(0)).getText();
        expect(text).equal(expected.linkPixelBuds.msg);
    });

    it('TC-004 | Link Pixel Buds with... "OK" button should send user to OOBE Welcome screen', async ()=>{
        await (await (objects.okBtn)).click()
    });

    // Case skipped FAIL, CANCEL button not clickable
    it.skip('TC-005 | Link Pixel Buds with... "CANCEL" button should cancel OOBE flow', async ()=>{
        await (await (objects.cancelBt)).click()
    });

    // it.skip('TC-004 | "Set Up" propose notification should be shown on screen and clickable', async ()=>{
    //     await (await (objects.setupBtn)).waitForDisplayed({ timeout: 9000 });
    //     await (await (objects.setupBtn)).click()

    // });

    // Execute a block of code after every test
    afterEach(() => {
        driver.reset();
    });

});
