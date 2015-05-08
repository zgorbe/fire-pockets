'use strict';

describe('HomeController', function() {
    var controller, scope, mockPocketsService;

    beforeEach(module('firePockets'));

    beforeEach(inject(function($rootScope, $controller, $q) {
        scope = $rootScope.$new();

        mockPocketsService = jasmine.createSpyObj('PocketsService', ['getTotal', 'getPockets']);
        mockPocketsService.getTotal.and.returnValue($q.when(100));
        mockPocketsService.getPockets.and.returnValue([{}, {}, {}]);

        controller = $controller('HomeCtrl', {
            $scope: scope,
            PocketsService: mockPocketsService
        });
        scope.$apply();
    }));

    it('should define 3 pockets', function() {
        expect(scope.pockets).toBeDefined();
        expect(angular.isArray(scope.pockets)).toBeTruthy();
        expect(scope.pockets.length === 3).toBeTruthy();
    });

    it('should define pockets total', function() {
        expect(scope.total).toBeDefined();
        expect(scope.total === 100).toBeTruthy();
    });

    it('should define addPocket function', function() {
        expect(scope.addPocket).toBeDefined();
        expect(angular.isFunction(scope.addPocket)).toBe(true);
    });
});