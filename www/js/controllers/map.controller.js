(function (define) {
    'use strict';

    define([
        '../services/laboratories.service',
        '../utils/geo-json.util'
    ], function (laboratoriesService, geoJsonUtil) {

        return ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

            var promise = $http.get('json/laboratories.json');

            $scope.defaults = {
                tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                maxZoom: 20
            };
            // if missed it raise 'The "center" property is not defined in the main scope'
            $scope.center = geoJsonUtil.getCenter.call({});
            promise.then(function (payload) {
                $scope.laboratory = laboratoriesService.getLaboratoryById.call(payload.data, $stateParams.id);
                $scope.center = geoJsonUtil.getCenter.call($scope.laboratory);
                $scope.geojson = geoJsonUtil.getGeoData.call($scope.laboratory);
            });
        }];
    });
}(this.define));
