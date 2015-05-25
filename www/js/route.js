(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/laboratories.view',
        'views/instruments.view',
        'views/instrument.view',
        'views/planimetry.view',
        'views/services.view',
        'views/service.view',
        'views/map.view',
        'views/clustering.view'
    ], function (tabView, homeView, laboratoriesView, instrumentsView, instrumentView, planimetryView, servicesView, serviceView, mapView, clusteringView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', tabView)
                .state('tabs.home', homeView)
                .state('tabs.services', servicesView)
                .state('tabs.service', serviceView)
                .state('tabs.laboratories', laboratoriesView)
                .state('tabs.instruments', instrumentsView)
                .state('tabs.instrument', instrumentView)
                .state('tabs.map', mapView)
                .state('tabs.planimetry', planimetryView)
                .state('tabs.clustering', clusteringView)
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
