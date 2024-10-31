const path=require('path')
exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        'appium:platformName':'Android',
        'appium:platformVersion':'15.0',
        'appium:deviceName':'Pixel 4',
        'appium:automationName':'UIAutomator2',
        'appium:app':path.join(process.cwd(),'app/Android/ApiDemos-debug.apk')
 } ],
    services: ['appium'],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // Additional configurations can be added here
};
