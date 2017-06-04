var ArpHomepage = function () {
    var labelARP = element(by.css(".navbar-brand"));
    var greeting = element(by.binding('yourName'));
    var menuDateTime = element(by.css('[ui-sref="select-datetime"]'));
    var visitorInfo = element(by.css('[ui-sref="visitor-information"]'));
    var welcomeH1 = element(by.xpath('.//*[.="1"]'));
    var welcomeH12 = element(by.tagName("h1"));
    var picker = element(by.model("visitDate"));
    var calButton = element(by.css('[ng-click="ctrl.calender.popup.isOpen = !ctrl.calender.popup.isOpen"]'))
    var date = element(by.css('.input-group'))
    var startTime = element(by.model("selectedStartTime")).element(by.cssContainingText('option', '19:00'));
    var endTime = element(by.model("selectedEndTime")).element(by.cssContainingText('option', '21:00'));
    var selectDate = element(by.model("date")).element(by.cssContainingText('.uib-datepicker-popup dropdown-menu ng-scope', '30'));
    var nxtButton = element(by.xpath('.//*[.="Next"]'));
    var id29 = element(by.tagName("td")).element(by.id('datepicker-122-3344-32'));
    var date26 = element(by.xpath('.//*[.="22"]'));


    this.setDate = function () {

        calButton.click();
        // browser.pause()
        date26.click();

    }

    this.getDate = function () {
        return date.getText();
    }


    this.get = function () {
        browser.get('https://test.snow.com/app/');
    };


    this.getmenuDateTime = function () {
        return menuDateTime.getText();
    };

    this.getvisitorInfo = function () {
        return visitorInfo.getText();
    };

    this.getLabel = function () {
        return labelARP.getText();
    };

    this.getTitle1 = function () {
        return browser.getTitle();
    };

    this.getWelcomemsg = function () {
        return welcomeH1.getText();


    };


    this.getWelcomemsg1 = function () {
        return welcomeH12.getText();


    };

    this.setTime = function () {
        startTime.click();
        // endTime.click();


    };

    this.setEndTime = function () {

        endTime.click();


    };

    this.getstartTime = function () {
        return startTime.getText();

    };

    this.getendTime = function () {
        return endTime.getText();

    };

    this.buttonClick = function () {
        nxtButton.click();

    };

};

module.exports = new ArpHomepage();