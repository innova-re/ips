(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

            var promise,
                getCenter;

            $scope.defaults = {
                tileLayer: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                maxZoom: 20
            };
            getCenter = function () {
                return {
                    lat: this.lat || 0,
                    lng: this.lng || 0,
                    zoom: 18
                };
            };
            // if missed it raise 'The "center" property is not defined in the main scope'
            $scope.center = getCenter.call({});
            promise = $http.get('json/laboratories.json');
            promise.then(function (payload) {
                $scope.laboratory = laboratoriesService.getLaboratoryById.call(payload.data, $stateParams.id);
                $scope.center = getCenter.call($scope.laboratory);
            });
        }];
    });
}(this.define));
