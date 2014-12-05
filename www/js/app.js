(function() {
    'use strict';

    define([
        'ionic',
        'route'
    ], function (ionic, route) {

        var app = angular.module('ipsApp', ['ionic']);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['ipsApp']);
        });

    });
})();
