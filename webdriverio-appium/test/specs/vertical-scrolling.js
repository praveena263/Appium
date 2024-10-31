describe("Scrolling", () => {
    it("Vertical scrolling", async () => {
        await $('~App').click()
        await $('~Activity').click()
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)') // this works
        //scrollTextIntoView()--more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

        await $('~Secure Surfaces').click()
        await expect($('~Secure Dialog')).toExist();
    });
    it("Horizontal scrolling", async () => {
        // await driver.activity(
        //  "io.appium.android.apis","io.appium.android.apis.view.Gallery1"
        // )
        await $('~Views').click()
        await $('~Gallery').click()
        await $('~1. Photos').click()
        const galleryElement = await $('android.widget.TextView');
        await expect(galleryElement).toBeDisplayed();
        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    });
    it("Horizontal scrolling", async () => {
        await $('~Views').click()
        await $('~Date Widgets').click()
        await $('~1. Dialog').click();
        // const dates=await $('text').getText();
        // console.log(dates)
        const currentDate=await $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')
        //console.log(currentDAte)
        await $('~change the date').click();
        await $('~Next month').click();
        await $('~10 September 2024').click()
        await $('android.widget.Button').click();
        const changeDate=await $('android=new UiSelector().resourceId("io.appium.android.apis:id/dateDisplay")')
        await console.log("currentDate "+currentDate.getText()+" changeDate "+changeDate.getText())
     expect(await currentDate.getText()).not.toEqual(changeDate.getText())
    });
});