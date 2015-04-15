(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/laboratories.view',
        'views/instruments.view',
        'views/planimetry.view',
        'views/services.view',
        'views/service.view',
        'views/map.view'
    ], function (tabView, homeView, laboratoriesView, instrumentsView, planimetryView, servicesView, serviceView, mapView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', tabView)
                .state('tabs.home', homeView)
                .state('tabs.services', servicesView)
                .state('tabs.service', serviceView)
                .state('tabs.laboratories', laboratoriesView)
                .state('tabs.instruments', instrumentsView)
                .state('tabs.map', mapView)
                .state('tabs.planimetry', planimetryView)
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
