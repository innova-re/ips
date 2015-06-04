(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        '../locales/app.locale',
        'factories/search.factory',
        'factories/modal.factory',
        'directives/header-search.directive',
        'ionicAngular',
        'uiRouter',
        'angularTranslate',
        'angularLeafletDirective'
    ], function (angular, route, appLocale, searchFactory, modalFactory, headerSearchDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router',
            'pascalprecht.translate',
            'leaflet-directive'
        ]);

        app.factory('searchFactory', searchFactory);
        app.factory('modalFactory', modalFactory);
        app.directive('ipsHeaderSearchDirective', headerSearchDirective);
        app.config(route);
        app.config(appLocale);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
