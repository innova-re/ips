(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'directives/planimetry.directive',
        'ionicAngular',
        'uiRouter'
    ], function (angular, route, planimetryDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.directive('planimetry', planimetryDirective);
        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
