(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/geo-json.util'
    ], function (servicesUtil, geoJsonUtil) {

        return ['$scope', '$stateParams', function ($scope, $stateParams) {

            $scope.defaults = {
                tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                maxZoom: 20
            };
            // if missed it raise 'The "center" property is not defined in the main scope'
            $scope.center = geoJsonUtil.getCenter({});
            $scope.laboratory = servicesUtil.getLaboratoryByLaboratoryId($stateParams.id);
            $scope.center = geoJsonUtil.getCenter($scope.laboratory);
            $scope.geojson = geoJsonUtil.getGeoData($scope.laboratory);
        }];
    });
}(this.define));
