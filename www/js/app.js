(function() {
    'use strict';

    define([
        'ionic',
        'route',
        'uiRouter'
    ], function (ionic, route) {

        var app = angular.module('ipsApp', [
            'ionic',
            'ui.router'
        ]);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

    });
})();
