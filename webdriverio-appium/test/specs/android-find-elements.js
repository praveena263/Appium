describe("Android Elements Find", () => {
  it("Find elements by acessibility Id", async () => {
    // find elements by accessability id
    const appOptions = await $("~App");
    //click on element
    await appOptions.click();
    //assertion
    const actionBar = await $("~Action Bar");
    expect(actionBar).toBeExisting();
  });
  it("Find elements by class name", async () => {
    const className = await $("android.widget.TextView");
    await expect(className).toHaveText("API Demos");
    //console.log(await className.getText())
  });
  it("Find elements by XPATH", async () => {});
  it("Find elements by UIautomater", async () => {
    const alertButton = await $(
      'android=new UiSelector().textContains("Alert")'
    ).isDisplayed();
    await alertButton.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the element to appear
    await alertButton.click();
  });
  it("Finding multiple elements", async () => {
    let ExpectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    let actualList = [];
    const textLink = await $$("android.widget.TextView");
    for (const elements of textLink) {
      actualList.push(await elements.getText());
    }
    console.log(actualList);
    expect(ExpectedList).toEqual(actualList);
  });
  it('Exercise',async()=>{
    await driver.$('~Views').click();
    await $('~Auto Complete').click();
    await $('~1. Screen Top').click();
    await $('android.widget.AutoCompleteTextView').setValue('canada');
  });
  it('Exercise',async()=>{
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")//.click();
    await $('android=new UiSelector().text("App/Alert Dialogs")').isDisplayed();
    await driver.pause(5000)
    //await expect($('//*[@text="App/Alert Dialogs"]')).isDisplayed();
    // await $('android.widget.AutoCompleteTextView').setValue('canada');
  })
});
