'use strict';

describe('HomeController', function(){
    var controller, scope, mockPocketsService;

    beforeEach(module('firePockets'));

    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();

        mockPocketsService = jasmine.createSpyObj('PocketsService', ['getTotal', 'getPockets']);
        mockPocketsService.getTotal.andReturn($q.when(100));
        mockPocketsService.getPockets.andReturn($q.when([{}, {}, {}]));

        controller = $controller('HomeCtrl', {
            $scope: scope,
            PocketsService: mockPocketsService
        });

    }));

    it('should define 3 pockets', function() {
        scope.getPockets();
        expect(scope.pockets).toBeUndefined();
        expect(angular.isArray(scope.pockets)).toBeTruthy();
        expect(scope.pockets.length === 3).toBeTruthy();
    });

    it('should define pockets total', function() {
        scope.updateTotal();
        expect(scope.total).toBeUndefined();
        expect(scope.total > 0).toBeTruthy();
    });
});
