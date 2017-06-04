
var Visitorpage = function() {
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
var welcomeH1 = element(by.xpath('.//*[.="2"]'));    
var welcomeH4 = element(by.tagName("h4"));
var labelARP = element(by.css(".navbar-brand"));
var nxtButton=element(by.xpath('.//*[.="Next"]'));
var visitorButton = element(by.css('[ng-click="onAddVisitorClicked()"]'));  
var editButton = element(by.css('[ng-click="onEditVisitorClicked(visitor)"]')).element(by.tagName("i"));  
var removeButton = element(by.css('[ng-click="onRemoveVisitorClicked(visitor)"]')).element(by.tagName("i"));
var popUp = element(by.xpath('.//*[.="Add Visitor"]'));
var name = element(by.model("currentVisitor.name"));
var age = element(by.model("currentVisitor.age"));
var height = element(by.model("currentVisitor.height"));
var weight = element(by.model("currentVisitor.weight"));    
var jacket1=element(by.xpath('.//*[.=" -- choose accessory -- "]'));
var boot1=element(by.xpath('.//*[.=" -- choose accessory -- "]'));
var jacket= element(by.xpath('.//*[.="80 cm"]'));
var boot =  element(by.xpath('.//*[.="17 (10.4cm)(1 to 3 year)"]'));
var name1=element(by.xpath('.//*[.="Shawon"]'));
var name2=element(by.xpath('.//*[.="Test User"]'));
var submitButton=element(by.css('[ng-click="onVisitorAddEditSave()"]'));
var saveButton=element(by.xpath('.//*[.="Save"]'));
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
    
    this.visitorButtonClick = function() {
     visitorButton.click();
        
  };
    
      this.buttonClick = function() {
     nxtButton.click();
        
  };
    
    this.getpopupTitle = function() {
    return popUp.getText();
    
       
  };
    
        this.setName = function(name1) {
    return name.sendKeys(name1);
    
       
  };
    
         this.setAge = function(age1) {
    return age.sendKeys(age1);
           
  };
    
       this.setHeight = function(height1) {
    return height.sendKeys(height1);
          
  }; 
    
         this.setWeight = function(weight1) {
    return weight.sendKeys(weight1);
          
  }; 
       this.setJacket = function() {
           jacket1.click();
    return jacket.click();
           
  };  
    
         this.setBoot = function() {
             boot1.click();
    return boot.click();
    
       
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
	    this.getName1 = function() {
        
    return name2.getText();
    
       
  }; 
};

module.exports = new Visitorpage();