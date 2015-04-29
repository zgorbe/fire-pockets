'use strict';

angular.module('firePockets')
    .controller('PlaygroundCtrl', ['$scope', '$firebaseObject', 'firebaseConfig', function ($scope, $firebaseObject, firebaseConfig) {
    	var obj = $firebaseObject(new Firebase(firebaseConfig.playgroundUrl));

    	obj.$bindTo($scope, 'playground').then(function() {
  			console.log($scope.playground); //
  			/*$scope.data.foo = "baz";  // will be saved to Firebase
  			ref.set({ foo: "baz" }); */ // this would update Firebase and $scope.data
		});
}]);