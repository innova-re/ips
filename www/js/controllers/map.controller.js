(function (define, document) {
    'use strict';

    define([
        '../services/laboratories.service',
        '../controllers/map-controllers/map-web.controller',
        '../controllers/map-controllers/map-app.controller'
    ], function (laboratoriesService, mapWebController, mapAppController) {

        return function ($scope, $stateParams) {

            var app,
                div;

            app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            div = document.getElementsByClassName('map-canvas')[0];
            $scope.laboratory = laboratoriesService.get($stateParams.id);

            app ? mapAppController($scope, div) : mapWebController($scope, div);
        };
    });
}(this.define, this.document));
