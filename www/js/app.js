(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'directives/planimetry.directive',
        'factories/services.factory',
        'ionicAngular',
        'uiRouter'
    ], function (angular, route, planimetryDirective, servicesFactory) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.directive('planimetry', planimetryDirective);
        app.factory('servicesFactory', servicesFactory);
        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
