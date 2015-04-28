(function (define, document) {
    'use strict';

    define([
        '../services/laboratories.service',
        '../controllers/map-controllers/map-web.controller',
        '../controllers/map-controllers/map-app.controller'
    ], function (laboratoriesService, mapWebController, mapAppController) {

        return ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

            var app,
                div,
                promise;

            app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            div = document.getElementsByClassName('map-canvas')[0];
            promise = $http.get('json/laboratories.json');

            promise.then(function (payload) {
                $scope.laboratory = laboratoriesService.getLaboratoryById.call(payload.data, $stateParams.id);
                app ? mapAppController($scope, div) : mapWebController($scope, div);
            });
        }];
    });
}(this.define, this.document));
