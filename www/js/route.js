(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/map.view',
        'views/poli.view',
        'views/laboratories.view',
        'views/planimetry.view',
        'views/services.view'
    ], function (tabView, homeView, mapView, poliView, laboratoriesView, planimetryView, servicesView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tab', tabView)
                .state('tab.home', homeView)
                .state('tab.map', mapView)
                .state('tab.poli', poliView)
                .state('tab.laboratories', laboratoriesView)
                .state('tab.planimetry', planimetryView)
                .state('tab.services', servicesView)
                // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
