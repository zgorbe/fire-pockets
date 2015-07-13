'use strict';

angular.module('firePockets')
    .directive('yourBalanceSince', ['ActionsService', function (ActionsService) {
        return {
            restrict: 'E',
            scope: { },
            replace: true,
            templateUrl: 'app/home/yourBalanceSince/yourBalanceSince.html',
            link: function($scope) {
                $scope.since = new Date();
                $scope.plus = 0;

                $scope.$watch('since', function(newValue) {
                    if (newValue) {
                        ActionsService.getAllActions(newValue).then(function(actions) {
                            $scope.plus = calcPlusValue(actions);
                        });
                    }
                });

                function calcPlusValue(actions) {
                    var sum = 0;

                    angular.forEach(actions, function(action) {
                        if (!action.movement) {
                            if (action.direction === 'plus') {
                                sum += action.amount;
                            } else {
                                sum -= action.amount;
                            }
                        }
                    });
                    
                    return sum;
                }
            }
        };
    }]);