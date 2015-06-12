(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        '../locales/app.locale',
        'factories/search.factory',
        'factories/modal.factory',
        'directives/main.directive',
        'ionicAngular',
        'uiRouter',
        'angularTranslate',
        'angularLeafletDirective',
        'angularjsGeolocation'
    ], function (angular, route, appLocale, searchFactory, modalFactory, mainDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router',
            'pascalprecht.translate',
            'leaflet-directive',
            'geolocation'
        ]);

        app.factory('searchFactory', searchFactory);
        app.factory('modalFactory', modalFactory);
        mainDirective(app);
        app.config(route);
        app.config(appLocale);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
