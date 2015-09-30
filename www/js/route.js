(function (define) {
    'use strict';

    define([
        'views/tab.view',
        'views/home.view',
        'views/search.view',
        'views/map.view',
        'views/clustering.view',
        'views/clustering-no-layers.view'
    ], function (tabView, homeView, searchView, mapView, clusteringView, clusteringNoLayersView) {

        return function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', tabView)
                .state('tabs.home', homeView)
                .state('tabs.search', searchView)
                .state('tabs.map', mapView)
                .state('tabs.clustering', clusteringNoLayersView)
                .state('tabs.clusteringNoLayers', clusteringNoLayersView)
            $urlRouterProvider.otherwise('/tab/home');
        };
    });
}(this.define));
