(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        '../locales/app.locale',
        'directives/planimetry.directive',
        'factories/search.factory',
        'factories/service.factory',
        'factories/modal.factory',
        'ionicAngular',
        'uiRouter',
        'angularTranslate',
        'angularLeafletDirective'
    ], function (angular, route, appLocale, planimetryDirective, searchFactory, serviceFactory, modalFactory) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router',
            'pascalprecht.translate',
            'leaflet-directive'
        ]);

        app.directive('planimetry', planimetryDirective);
        app.factory('searchFactory', searchFactory);
        app.factory('serviceFactory', serviceFactory);
        app.factory('modalFactory', modalFactory);
        app.config(route);
        app.config(appLocale);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
