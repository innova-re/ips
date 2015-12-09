(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/geo-json.util'
    ], function (servicesUtil, geoJsonUtil) {

        return ['$scope', '$stateParams', 'leafletData', function ($scope, $stateParams, leafletData) {
            $scope.tiles = {
                // Without this object the emulator assumes a local file for the tiles
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            };
            $scope.laboratory = servicesUtil.getLaboratoryByLaboratoryId($stateParams.id);
            if($stateParams.routingOn) {
                // Insert the code to use launchnavigator
                geoJsonUtil.setRouting($scope, leafletData);
            } else {
                $scope.center = geoJsonUtil.getCenter($scope.laboratory, $stateParams.routingOn && 6);
                $scope.geojson = geoJsonUtil.getGeoData($scope.laboratory);
            }
        }];
    });
}(this.define));
