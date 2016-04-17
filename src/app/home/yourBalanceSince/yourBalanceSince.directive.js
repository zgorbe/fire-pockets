'use strict';

angular.module('firePockets')
    .directive('yourBalanceSince', ['ActionsService', '_', function (ActionsService, _) {
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
                    return _.reduce(actions, function(total, action) {
                        if (!action.movement) {
                            if (action.direction === 'plus') {
                                total += action.amount;
                            } else {
                                total -= action.amount;
                            }
                        }
                        return total;
                    }, 0);
                }
            }
        };
    }]);