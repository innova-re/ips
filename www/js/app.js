(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        '../locales/app.locale',
        'factories/main.factory',
        'directives/main.directive',
        'ionicAngular',
        'uiRouter',
        'angularTranslate',
        'angularLeafletDirective',
        'angularjsGeolocation'
    ], function (angular, route, appLocale, mainFactory, mainDirective) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router',
            'pascalprecht.translate',
            'leaflet-directive',
            'geolocation'
        ]);

        mainDirective(app);
        mainFactory(app);
        app.config(route);
        app.config(appLocale);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

        return app;

    });
}(this.define, this.document));
