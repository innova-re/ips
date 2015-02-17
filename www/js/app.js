(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'directives/svgPanZoom.directive',
        'ionicAngular',
        'uiRouter'
    ], function (angular, route, svgPanZoomDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.directive('svgPanZoom', svgPanZoomDirective);
        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
