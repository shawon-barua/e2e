
var RideSelectionPage = function() {
  /*var labelARP = element(by.css(".navbar-brand"));
  var greeting = element(by.binding('yourName'));
  var menuDateTime =  element(by.css('[ui-sref="select-datetime"]'));
  var visitorInfo =  element(by.css('[ui-sref="visitor-information"]')); 
  var welcomeH1 = element(by.tagName("h1"));
  var welcomeH12 = element(by.tagName("h1"));  
  var picker = element(by.model("currentVisitor.name"));
  var calButton = element(by.css('[ng-click="open()"]')) 
  var date= element(by.css('.input-group')) 
  var startTime= element(by.model("selectedStartTime")).element(by.cssContainingText('option', '16:00'));
  var endTime= element(by.model("selectedEndTime")).element(by.cssContainingText('option', '18:00'));
  var selectDate = element(by.model("date")).element(by.cssContainingText('.uib-datepicker-popup dropdown-menu ng-scope','29'));
  var nxtButton=element(by.xpath('.//*[.="Next"]'));
    var id29=element(by.tagName("td")).element(by.id('datepicker-122-3344-32'));
*/

var RideInfo =  element(by.css('[ui-sref="select-ride"]')); 
var yes = element(by.xpath('.//*[.="Yes"]'));
var welcomeH1 = element(by.xpath('.//*[.="3"]'));    
var welcomeH4 = element(by.tagName("h4"));
var labelARP = element(by.css(".navbar-brand"));
var nxtButton=element(by.xpath('.//*[.="Next"]'));


var submitButton=element(by.css('[ng-click="visitorInfoForm.$valid && onVisitorAddEditSave()"]'));
var rides=element.all(by.repeater('ride in rideInformation')); 
var images=element.all(by.repeater('ride in rideInformation')).all(by.tagName("img"));
//var rideName=element(by.xpath('.//*[.="Hair Raiser2"]'));
    for (i = 0; i < 12; i++) { 
        var rideName=element(by.xpath('.//div[i]/div/div/div[2]/h2/span'));
    }
    
//var rideDescription=element.all(by.repeater('ride in rideInformation')).all(by.tagName("p")); 
var saveButton=element(by.xpath('.//*[.="Save"]'));
//var check = $('[type="checkbox"]');
var check= element.all(by.repeater('visitor in ride.VisitorsAllowed')).all(by.tagName("label"));
    
  this.get = function() {
     browser.get('https://test.snow.com/app/');
  };

 
     this.getvisitorInfo = function() {
    return visitorInfo.getText();
  };
    
    this.getLabel = function() {
    return labelARP.getText();
  };


   this.getWelcomemsg = function() {
    return welcomeH1.getText();
         
  };
    
        
   this.getWelcomemsg1 = function() {
    return welcomeH4.getText();
    
       
  };
    
    this.countRide = function() {
     return rides;
        
  };
    
      this.rideImage = function() {
     return images;
        
  };
    
      this.rideName = function() {
          for (i = 0; i < 12; i++) { 
        var rideName=element(by.xpath('.//div['+i+']/div/div/div[2]/h2/span'));
    }
     return rideName.getText();
        
  };
    
         this.rideDescription = function() {
              for (i = 0; i < 12; i++) { 
        var rideDescription=element(by.xpath('.//div['+i+']/div/div/div[2]/p[2]/span'));
    }
     return rideDescription.getText();
        
  };
    
      this.buttonClick = function() {
     nxtButton.click();
        
  };
    
      this.clickSave = function() {
        
    return submitButton.click();
    
       
  };
    
              this.clickEdit = function() {
        //console.log(editButton.getText());
    return editButton.click();
    
       
  };
    
             this.clickRemove = function() {
        //console.log(editButton.getText());
     removeButton.click();
    yes.click();
       
  };
         this.getName = function() {
        
    return name1.getText();
    
       
  }; 
    
        this.tapCheckBox = function() {
        
    check.get(0).click();
    check.get(1).click();
    check.get(2).click();   
  };
};

module.exports = new RideSelectionPage();