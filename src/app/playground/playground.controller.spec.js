'use strict';

describe('PlaygroundCtrl', function() {
    var controller, scope;

    beforeEach(module('firePockets'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        controller = $controller('PlaygroundCtrl', {
            $scope: scope
        });

        scope.$apply();
    }));

    it('should define functions', function() {
        expect(scope.showAddForm).toBeDefined();
        expect(scope.hideAddForm).toBeDefined();
        expect(scope.addMessage).toBeDefined();
        expect(scope.deleteMessage).toBeDefined();
        
        expect(angular.isFunction(scope.showAddForm)).toBe(true);
        expect(angular.isFunction(scope.hideAddForm)).toBe(true);
        expect(angular.isFunction(scope.addMessage)).toBe(true);
        expect(angular.isFunction(scope.deleteMessage)).toBe(true);
    });
});