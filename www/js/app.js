(function() {
    'use strict';

    define([
        'ionic',
        'route',
        'directives/planimetry.directive',
        'uiRouter'
    ], function (ionic, route, planimetryDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.directive('svgPanZoom', planimetryDirective);
        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

    });
})();
