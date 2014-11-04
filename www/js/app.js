(function() {
    'use strict';

    define([
        'ionic',
        'controllers',
        'services'
    ], function (ionic, controllers, services) {

        return angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

    });
})();
