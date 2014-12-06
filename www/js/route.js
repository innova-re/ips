(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/destinations.view',
        'views/map.view',
        'views/planimetry.view'
    ], function (tabView, homeView, destinationsView, mapView, planimetryView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tab', tabView)
                // Each tab has its own nav history stack:
                .state('tab.home', homeView)
                .state('tab.destinations', destinationsView)
                .state('tab.map', mapView)
                .state('tab.planimetry', planimetryView);
                // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');

        };
    });
}(this.define));
