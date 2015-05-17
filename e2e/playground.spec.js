'use strict';

describe('The playground view', function () {
    var page;

    beforeEach(function () {
        browser.get('http://localhost:3000/#/playground');
        page = require('./playground.po');
    });

    it('should include add button', function() {
        expect(page.addButton.isPresent()).toBeTruthy();
    });

    it('should list 3 messages', function() {
        browser.driver.sleep(3000);
        expect(page.getMessageList().count()).toBe(3);
    });

});
