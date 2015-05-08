'use strict';

describe('Testing Routes', function() {
    var route, location, rootScope, httpBackend;

    beforeEach(module('firePockets'));

    beforeEach(inject(function($route, $location, $rootScope, $httpBackend) {
        route = $route;
        location = $location;
        rootScope = $rootScope;
        httpBackend = $httpBackend;
    }));

    it('should redirect to login without authentication', function() {
        httpBackend.expectGET('app/home/home.html').respond(200);
        httpBackend.expectGET('app/auth/login.html').respond(200);

        var loginPath = '/login';
        expect(location.path()).toBe('');

        location.path('/');
        rootScope.$digest();

        expect(location.path()).toBe(loginPath);
    });

    it('should allow access the playground page without authentication', function() {
        httpBackend.expectGET('app/playground/playground.html').respond(200);

        var playgroundPath = '/playground';
        expect(location.path()).toBe('');

        location.path(playgroundPath);
        rootScope.$digest();

        expect(location.path()).toBe(playgroundPath);
    });

    it('should allow access the login page without authentication', function() {
        httpBackend.expectGET('app/auth/login.html').respond(200);

        var loginPath = '/login';
        expect(location.path()).toBe('');

        location.path(loginPath);
        rootScope.$digest();

        expect(location.path()).toBe(loginPath);
    });
});