'use strict';

describe('PlaygroundCtrl', function(){
    var controller, scope;

    beforeEach(module('firePockets'));

    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();

        controller = $controller('PlaygroundCtrl', {
            $scope: scope
        });

        scope.$apply();
    }));

    it('should define playground', function(done) {
        scope.$watch('playground', function () {
            done();
        });

        expect(scope.playground).toBeDefined();
    });
});