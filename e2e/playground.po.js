/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PlaygroundPage = function() { 
    this.addButton = element(by.buttonText('Add a message'));
    this.submitButton = element(by.buttonText('Add'));
    this.messagesContainer = element(by.css('.messages'));

    this.get = function() {
        browser.get('http://localhost:3000/#/playground');
    };
    this.getMessageList = function() {
        return element.all(by.repeater('message in playground.messages'));
    };
    this.getTextarea = function() {
        return element(by.model('message'));
    };
    this.deleteNth = function(n) {
        var message = this.getMessageList().get(n);
        browser.actions().mouseMove(message).perform();
        message.element(by.css('.delete-link')).click();
    };
};

module.exports = PlaygroundPage;
