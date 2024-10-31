
const path =require('path')
exports.config = {
    runner: 'local',
    path: '/wd/hub',
    port:4723,
    specs: [
        './test/specs/android-colornote/*.js' // Adjust the path to your test specs if necessary
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 7', // Replace with your device/emulator name
        //'appium:platformVersion': '15.0',     // Replace with the actual Android version of your emulator/device
        'appium:udid': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'), // Replace with the path to your APK file
        'appium:autoGrantPermissions':true,
       // port: 4723,
        maxInstances: 1
    },
    {
        //maxInstances: 2,  // Number of parallel instances
        platformName: 'Android',
        'appium:deviceName': 'Pixel 7a for testing',
        'appium:udid': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'), // Replace with the path to your APK file
       // 'port': 4724,
        maxInstances: 1
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: 'localhost',
                port: 4723,
                relaxedSecurity: true,
            },
            logPath: './'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function () {
        /**
         * Setup any pre-test tasks here
         */
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot(); // Take a screenshot if a test fails
        }
    }
};
