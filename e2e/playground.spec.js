'use strict';

describe('The playground view', function () {
    var page;

    beforeEach(function () {
        if (!page) {
            browser.get('http://localhost:3000/#/playground');
            browser.driver.sleep(5000);
            page = require('./playground.po');
        }
    });

    it('should include add button', function() {
        expect(page.addButton.isPresent()).toBeTruthy();
    });

    it('should list messages', function() {
        page.getMessageList().count().then(function(count) {
            expect(count > 0).toBe(true);    
        });
    });

    it('should show the add form', function() {
        page.getMessageList().count().then(function(originalCount) {
            page.addButton.click();
            
            page.getTextarea().sendKeys('Test message');
            
            page.submitButton.click().then(function() {
                page.getMessageList().count().then(function(count) {
                    expect(count - originalCount).toBe(1);
                });    
            });
        });
    });

    it('should delete test message', function() {
    });
});
