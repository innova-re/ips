(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/search.view',
        'views/map.view',
        'views/clustering.view'
    ], function (tabView, homeView, searchView, mapView, clusteringView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', tabView)
                .state('tabs.home', homeView)
                .state('tabs.search', searchView)
                .state('tabs.map', mapView)
                .state('tabs.clustering', clusteringView)
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
