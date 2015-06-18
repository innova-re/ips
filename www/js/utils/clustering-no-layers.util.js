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
                $scope.markers = [{
                    lat: $scope.coords.lat,
                    lng: $scope.coords.lng,
                    clickable: false,
                    icon: {
                        iconUrl: 'images/marker-start.png'
                    }
                }].concat(geoJsonUtil.getMarkers($scope.laboratories));
                $scope.radiusConvert = function () {
                    $scope.paths.circle.radius = $scope.paths.circle.radiusKm * 1000;
                };
                $scope.paths = {
                    circle: {
                        type: 'circle',
                        radius: 1000,
                        latlngs: $scope.markers[0],
                        clickable: false,
                        weight: 1
                    }
                };
                $scope.paths.circle.radiusKm = 1;
                $scope.bounds = geoJsonUtil.getBounds($scope.laboratories, leafletBoundsHelpers);
                toggleTemplate();
            };
        };
    });
}(this.define));
