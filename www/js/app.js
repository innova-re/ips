(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'directives/planimetry.directive',
        'factories/search.factory',
        'ionicAngular',
        'uiRouter'
    ], function (angular, route, planimetryDirective, searchFactory) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.directive('planimetry', planimetryDirective);
        app.factory('searchFactory', searchFactory);
        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
