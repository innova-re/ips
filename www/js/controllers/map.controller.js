(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/geo-json.util'
    ], function (servicesUtil, geoJsonUtil) {

        return ['$scope', '$stateParams', 'leafletData', function ($scope, $stateParams, leafletData) {
            $scope.laboratory = servicesUtil.getLaboratoryByLaboratoryId($stateParams.id);
            if($stateParams.routingOn) {
                geoJsonUtil.setRouting($scope, leafletData);
            } else {
                $scope.center = geoJsonUtil.getCenter($scope.laboratory, $stateParams.routingOn && 6);
                $scope.geojson = geoJsonUtil.getGeoData($scope.laboratory);
            }
        }];
    });
}(this.define));
