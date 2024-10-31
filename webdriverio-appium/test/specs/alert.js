describe("Aletrs", () => {
    it("Alerts", async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
        await driver.acceptAlert()
    });
    it("Find elements by class name", async () => {
    
    });
});