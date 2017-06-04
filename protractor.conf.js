var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenShotReporter = require('protractor-jasmine2-screenshot-reporter');

var specReporter = new SpecReporter({
    spec: {
        displayStacktrace: true,
        //takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true
    }
});

var htmlReporter = new HtmlScreenShotReporter({
    dest: 'report/',
    screenshotsFolder: 'images',
    filename: 'test-report.html',
    fileNameDateSuffix: true,
    reportOnlyFailedSpecs: false,
    showQuickLinks: true,
    captureOnlyFailedSpecs: true,
    preserveDirectory: false,
    reportTitle: "Snow Test Cases",
    configurationStrings: {
        // logUrlOnFailure: true,
        logBrowserConsoleOnFailure: true
    },
    pathBuilder: function (currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});


module.exports = (function () {

    var config = {
        framework: 'jasmine2',
        //seleniumAddress: 'http://localhost:4444/wd/hub',
        baseUrl: 'https://test.snow.com/',
        directConnect: true,
        specs: ['./specs/*.js'],
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 60000,
            print: function() {}
        },
        capabilities: {
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 2
        },


        // Setup the report before any tests start
        beforeLaunch: function () {
            return new Promise(function (resolve) {
                htmlReporter.beforeLaunch(resolve);
            });
        },

        onPrepare: function () {
            browser.driver.get('https://test.snow.com/app/');
            protractor.basePath = '../ebc_angular/tests/e2e';

            jasmine.getEnv().addReporter(htmlReporter);
            jasmine.getEnv().addReporter(specReporter);

            browser.driver.manage().window().maximize();
            browser.manage().timeouts().pageLoadTimeout(40000);
            browser.manage().timeouts().implicitlyWait(25000);

        },

        afterLaunch: function (exitCode) {
            return new Promise(function (resolve) {
                htmlReporter.afterLaunch(resolve.bind(this, exitCode));
            });
        }
    };

    return {
        config : config
    };
})();


