(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/laboratories.view',
        'views/instruments.view',
        'views/planimetry.view',
        'views/services.view',
        'views/map.view'
    ], function (tabView, homeView, laboratoriesView, instrumentsView, planimetryView, servicesView, mapView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tab', tabView)
                .state('tab.home', homeView)
                .state('tab.services', servicesView)
                .state('tab.laboratories', laboratoriesView)
                .state('tab.instruments', instrumentsView)
                .state('tab.map', mapView)
                .state('tab.planimetry', planimetryView)
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
