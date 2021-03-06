const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    allScriptsTimeout: 110000,
    specs: [
        './pluginTest.js'
    ],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // "args": ["incognito", "--window-size=1920,1080", "start-maximized", "--test-type=browser"],
            args: ['disable-extensions'],
            // args: ['--headless', 'disable-extensions'],
            prefs: {
                download: {
                    prompt_for_download: false
                }
            }
        }
    },
    // multiCapabilities: [
    //     {
    //         browserName: 'chrome'
    //         // chromeOptions: {
    //         //     // "args": ["incognito", "--window-size=1920,1080", "start-maximized", "--test-type=browser"],
    //         //     // args: ['disable-extensions'],
    //         //     args: ['--headless', 'disable-extensions'],
    //         //     prefs: {
    //         //         download: {
    //         //             prompt_for_download: false
    //         //         }
    //         //     }
    //         // }
    //     },
    //     { browserName: 'firefox' }
    // ],
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        print: function() {}
    },
    OnPrepare() {
        jasmine.getEnv().addReporter,(new SpecReporter({ spec: { displayStacktrace: true } }));
    },
    plugins: [
        {
            path: '../', //path for protractor plugin
            outdir: '_test-reports',
            filename: 'e2e-tests',
            parseXrayId: true, //default false
            xrayIdOnlyTests: true //defautl false
        }
    ]
};
