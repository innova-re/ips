(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/destinations.view',
        'views/destination.view'
    ], function (tabView, homeView, destinationsView, destinationView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tab', tabView)
                // Each tab has its own nav history stack:
                .state('tab.home', homeView)
                .state('tab.destinations', destinationsView)
                .state('tab.destination-detail', destinationView);
                // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');

        };
    });
}(this.define));
