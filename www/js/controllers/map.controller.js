(function (define) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

            var promise = $http.get('json/laboratories.json');

            // TODO - take these parameter from the payload
            $scope.center = {
                lat: 39.270507,
                lng: 9.124028,
                zoom: 18
            };
            promise.then(function (payload) {
                $scope.laboratory = laboratoriesService.getLaboratoryById.call(payload.data, $stateParams.id);
            });
        }];
    });
}(this.define));
