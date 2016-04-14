'use strict';
var PlaygroundPage = require('./playground.po');

describe('The playground view', function () {
    var page = new PlaygroundPage();

    beforeAll(function () {
        page.get();
    });

    it('should include add button', function() {
        expect(page.addButton.isPresent()).toBeTruthy();
    });

    it('should list messages', function() {
        browser.wait(protractor.ExpectedConditions.presenceOf(page.messagesContainer), 10000, 'Failed to load messages');
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
        page.getMessageList().count().then(function(originalCount) {
            page.deleteNth(0);
            page.getMessageList().count().then(function(count) {
                expect(originalCount - count).toBe(1);
            });    
        });
    });
});
