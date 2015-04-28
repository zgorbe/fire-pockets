'use strict';

angular.module('firePockets')
    .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'Auth', function ($scope, $rootScope, $location, Auth) {
        $scope.authenticate = function(user) {
            Auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function(authData) {
                $location.path('/');
                $rootScope.$broadcast('loginEvent', authData.password.email);
            }).catch(function() {
                $scope.loginFailure = 'Authentication failed';
                $scope.user = {};
            });
        };
}]);