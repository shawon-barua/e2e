
var ConfrimPage = function() {
  

var RideInfo =  element(by.css('[ui-sref="select-ride"]')); 
var yes = element(by.xpath('.//*[.="Yes"]'));
var  headerNum= element(by.xpath('.//*[.="4"]'));    
var headerTxt = element(by.xpath('.//*[.="Confirmation"]'));
var cartValue = element(by.xpath('.//*[.="200.0"]'));
var labelARP = element(by.css(".navbar-brand"));
var nxtButton=element(by.xpath('.//*[.="Next"]'));
var Ride1=element(by.xpath('.//*[.="Hair Raiser2"]'));
var Ride2=element(by.xpath('.//*[.="Arctic Blast"]'));
var confirm=element(by.xpath('.//*[.="Yes, let me add"]'));
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
    return headerTxt.getText();
         
  };
    

    
      this.buttonClick = function() {
     nxtButton.click();
        
  };
    
      this.clickSave = function() {
        
    return submitButton.click();
    
       
  };
    
         this.getCartValue = function() {
        
      
   return cartValue.getText();
       
  }; 
    
         this.getRide1 = function() {
        
    
    return Ride2.getText();
       
  };
         this.getName = function() {
        
    return name1.getText();
          
  }; 
        this.tapConfirm = function() {
        
    return confirm.click();
    
       
  };    

};

module.exports = new ConfrimPage();