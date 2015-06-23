(function (define) {
    'use strict';

    define([], function () {

        return function ($scope) {
            $scope.toggleGroup = function (group) {
                if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                }
            };
            $scope.isGroupShown = function (group) {
                return $scope.shownGroup === group;
            };
        };
    });
}(this.define));
