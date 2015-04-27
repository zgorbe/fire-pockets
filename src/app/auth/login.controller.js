'use strict';

angular.module('firePockets')
    .controller('LoginCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {
        $scope.authenticate = function(user) {
            Auth.$authWithPassword({
                email: user.email,
                password: user.password
            }).then(function() {
                $location.url('/');
            }).catch(function() {
                $scope.loginFailure = 'Authentication failed';
            });
        };
}]);