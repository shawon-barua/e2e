
var arpHomepage = require('../pages/ArpHomepage.js');
var arpVisitorPage = require('../pages/VisitorPage.js');
var arpRidePage = require('../pages/RideSelectionPage.js');
var arpItinaryPage = require('../pages/ItineraryPage.js');
var ConfirmPage = require('../pages/ConfirmPage.js');
var CartPage = require('../pages/cartOverview.js');
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
describe('SNOW website', function() {
 
 //var arpHomepage = new ArpHomepage();
    arpHomepage.get();
 

  it('should have a title name ARP', function() {
      // var arpHomepage = new ArpHomepage();
    //arpHomepage.get();
    expect(arpHomepage.getTitle1()).toEqual('ARP');
  });

  it('should have a Label Named ARP in Top', function() {
  
      expect(arpHomepage.getLabel()).toEqual('ARP');
  
  });
  it('should not have a Menu Named Date Time in Top', function() {
  
      expect(arpHomepage.getmenuDateTime()).toEqual('Date Time');
  
  });
  it('should not have a Menu Named Visitor Info in Top', function() {
  
      expect(arpHomepage.getvisitorInfo()).toEqual('Visitor Info');
  
  });
    
  it('should have welcome messages', function() {
  
     expect(arpHomepage.getWelcomemsg()).toEqual('1');
      
  
  });
    
    it('should set a date', function() {
  
     arpHomepage.setDate();
    // expect(arpHomepage.getDate()).toEqual('Mar 27, 2017');   
     // arpHomepage.calendarClick();
  
  });
    
       it('should verify a date', function() {
  
    
    expect(arpHomepage.getDate());   
      
  
  });
    
     it('should set start time', function() {
  
     arpHomepage.setTime();
    // expect(arpHomepage.getDate()).toEqual('Mar 27, 2017');   
      
  
  }); 
    
      it('should set  end time', function() {
  
     arpHomepage.setEndTime();
    // expect(arpHomepage.getDate()).toEqual('Mar 27, 2017');   
      
  
  }); 
    
      it('verify start  time', function() {
  
     
 expect(arpHomepage.getstartTime()).toEqual('19:00');   
      
  
  }); 
    
     it('verify end  time', function() {
  
     
 expect(arpHomepage.getendTime()).toEqual('21:00');   
      
  
  }); 
    
       it('click next', function() {
  
     
 arpHomepage.buttonClick();  
           
    //  browser.pause();
            expect(arpVisitorPage.getWelcomemsg()).toEqual('2');   
        
    
  
  });
    
    
// snow visitorpage
 it('Click Add Visitor Button', function() {
  
     
  expect(arpVisitorPage.visitorButtonClick());  
  expect(arpVisitorPage.getpopupTitle ()).toEqual('Add Visitor'); 
    
  
  });  
    
 it('Add Visitor info', function() {
  
     
     arpVisitorPage.setName('Shawon');
     arpVisitorPage.setAge(22);
     arpVisitorPage.setHeight(166);
     arpVisitorPage.setWeight(44);
     arpVisitorPage.setJacket();
     
     arpVisitorPage.setBoot();
     expect(arpVisitorPage.clickSave());
     expect(arpVisitorPage.getName ()).toEqual('Shawon');  

  });  
    
     it('Edit Visitor info ', function() {
    
      arpVisitorPage.clickEdit();
      arpVisitorPage.setName('Test');
      
      arpVisitorPage.clickSave();
      //expect(arpVisitorPage.getName ()).toEqual('shawonTest'); 
  });
    
         it('Remove Visitor info ', function() {
    
      arpVisitorPage.clickRemove();
     
      //expect(arpVisitorPage.getName ()).toEqual('shawonTest'); 
  });
    
     it('Click Add Visitor Button 2', function() {
  
     
 expect(arpVisitorPage.visitorButtonClick());  
 // expect(arpVisitorPage.getpopupTitle ()).toEqual('Add Visitor'); 
    
  
  }); 
    
     it('Add Visitor info 2', function() {
  
     
      arpVisitorPage.setName('Test User');
      arpVisitorPage.setAge(11);
      arpVisitorPage.setHeight(102);
      arpVisitorPage.setWeight(22);
      arpVisitorPage.setJacket();
     
      arpVisitorPage.setBoot();
      arpVisitorPage.clickSave();
         
      expect(arpVisitorPage.getName1 ()).toEqual('Test User');  
   
      
      
     
  }); 
    
  it('Click Add Visitor Button 3', function() {
  
     
 expect(arpVisitorPage.visitorButtonClick());  
 // expect(arpVisitorPage.getpopupTitle ()).toEqual('Add Visitor'); 
    
  
  }); 
    
     it('Add Visitor info 3', function() {
  
     
      arpVisitorPage.setName('Shawon');
      arpVisitorPage.setAge(44);
      arpVisitorPage.setHeight(122);
      arpVisitorPage.setWeight(22);
      arpVisitorPage.setJacket();
     
      arpVisitorPage.setBoot();
      arpVisitorPage.clickSave();
         
      expect(arpVisitorPage.getName ()).toEqual('Shawon');  
   
    //  browser.pause();
      
     
  });  
    
       it('click next and go to ride page', function() {
  
     
 arpVisitorPage.buttonClick();  
           
    // browser.pause();
           expect(arpRidePage.getWelcomemsg()).toEqual('3');   
         // browser.driver.sleep(500);
  
  });
    
    it('should have 12 Rides', function() {

  expect(arpRidePage.countRide().count()).toBe(12);
});
    
   it('includes a Ride image', function() {
       for (i = 0; i < 12; i++) { 
           var a=expect(arpRidePage.rideImage().get(i).getAttribute('ng-src')).toMatch(/\w+.(jpg|gif|png|svg)/i);
          //  console.log(arpRidePage.rideImage().get(i).getAttribute('ng-src'));
}
    
});
    
       it('includes a Ride Name ', function() {
        for (i = 0; i < 12; i++) { 
           var a=expect(arpRidePage.rideName()).toMatch(/\w+/);
        }
          // console.log(a);
});
          it('includes a Ride Description ', function() {
       for (i = 0; i < 12; i++) { 
           var a=expect(arpRidePage.rideDescription()).toMatch(/\w/);

       }
    
});
          it('Select rides and go to itinerary page ', function() {
      
              expect(arpRidePage.tapCheckBox());
              expect(arpRidePage.buttonClick());         
    
}); 
    
          it('Verify itinerary page and check ride name', function() {
  
              expect(arpItinaryPage.getWelcomemsg()).toEqual('4');  
              expect(arpItinaryPage.getRide()).toEqual('Hair Raiser2');
              expect(arpItinaryPage.getRide1()).toEqual('Arctic Blast'); 
              expect(arpItinaryPage.buttonClick()); 

  });
    
         it('Verify Confirmation page', function() {
  
              expect(ConfirmPage.getWelcomemsg()).toEqual('Confirmation');  
           

  });
          it('Verify Cart value', function() {
  
              expect(ConfirmPage.getCartValue()).toEqual('200.0');
               expect(ConfirmPage.tapConfirm());          
  });
    
           it('Verify Cart page', function() {
  
              expect(CartPage.getWelcomemsg()).toEqual('Cart Overview');  
           

  });
    
});