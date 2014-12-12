(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'directives/planimetry.directive',
        'ionicAngular',
        'uiRouter'
    ], function (angular, route, planimetryDirective) {

        angular
            .module('ipsApp', [
                'ionic',
                'ui.router'
            ])
            .directive('svgPanZoom', planimetryDirective)
            .config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

    });
}(this.define, this.document));
