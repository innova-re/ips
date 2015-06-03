(function (define) {
    'use strict';

    define([
        '../utils/geo-json.util'
    ], function (geoJsonUtil) {
        return function ($scope, leafletBoundsHelpers) {

            var toggleTemplate = function () {
                $scope.mapOn = !$scope.mapOn;
            };
            $scope.closeMap = function () {
                toggleTemplate();
            };
            $scope.mapOn = false;
            $scope.openMap = function () {
                $scope.markers = geoJsonUtil.getMarkers($scope.laboratories);
                $scope.bounds = geoJsonUtil.getBounds($scope.laboratories, leafletBoundsHelpers);
                toggleTemplate();
            };
        };
    });
}(this.define));
