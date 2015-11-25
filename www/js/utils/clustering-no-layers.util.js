(function (define) {
    'use strict';

    define([
        '../utils/geo-json.util'
    ], function (geoJsonUtil) {
        return function (args) {

            var $scope = args[0];
            var leafletBoundsHelpers = args[1];
            var $stateParams = args[2];

            $scope.tiles = {
                // Without this object the emulator assumes a local file for the tiles
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            };
            $scope.markers = [{
                lat: $scope.coords.lat,
                lng: $scope.coords.lng,
                clickable: false,
                icon: {
                    iconUrl: 'images/marker-start.png',
                    iconSize: [25, 40]
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
                    weight: 1,
                    radiusKm: 1
                }
            };
            $scope.bounds = geoJsonUtil.getBounds($scope.laboratories, leafletBoundsHelpers);
        };
    });
}(this.define));
