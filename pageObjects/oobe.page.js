class halfsheet {
    /**
     * Define Pairing Elements
     */
    get connectBtn() {return $('//android.widget.Button[@resource-id="com.google.android.gms:id/connect_btn"]')};
    get pairBtn() {return $('//android.widget.Button[@resource-id="android:id/button1"]')};
    get setupDevice() {return $('//android.widget.TextView[@content-desc="Set up device"]')};

    _setupDeviceHalfsheet(index){
        return $(`//android.widget.TextView[@index="${index}"]`);
    }

    // #OOBE Flow Activity
    get saveBtn() {return $('//android.widget.Button[@resource-id="com.google.android.gms:id/connect_btn"]')};
    get setupBtn() {return $('//android.widget.Button[@resource-id="com.google.android.gms:id/setup_btn"]')};
    get linkPixelMsg() {return $('//android.widget.LinearLayout[@resource-id="com.android.companiondevicemanager:id/container"]')};
    get okBtn() {return $('//android.widget.Button[@resource-id="com.android.companiondevicemanager:id/button_pair"]')};
    // Start OOBE, I accept, Next,  buttonds has same recource-id
    get startSetupBtn() {return $('//android.widget.Button[@resource-id="com.google.android.apps.wearables.maestro.companion:id/oobe_action_button"]')};
    get cancelBtn() {return $('//android.widget.Button[@resource-id="com.google.android.apps.wearables.maestro.companion:id/oobe_cancel_button"]')};

    }
    module.exports = new halfsheet();
