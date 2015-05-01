(function (define) {
    'use strict';

    define([
        '../services/laboratories.service',
        'text!../../../geojson/cittadella-universitaria.geojson.json'
    ], function (laboratoriesService, dataGeoJson) {

        return ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

            var promise = $http.get('json/laboratories.json');

            // TODO - take these parameter from the payload
            $scope.center = {
                lat: 39.270507,
                lng: 9.124028,
                zoom: 18
            };
            $scope.defaults = {
                tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                maxZoom: 19,
                path: {
                    weight: 10,
                    color: '#800000',
                    opacity: 1
                }
            }
            $scope.geojson = {
                data: JSON.parse(dataGeoJson)
            };
            promise.then(function (payload) {
                $scope.laboratory = laboratoriesService.getLaboratoryById.call(payload.data, $stateParams.id);
            });
        }];
    });
}(this.define));
