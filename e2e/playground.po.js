/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PlaygroundPage = function() { 
    this.addButton = element(by.css('input.btn'));

    this.getMessageList = function() {
        return element.all(by.repeater('message in playground.messages'));
    }	
};

module.exports = new PlaygroundPage();
