(function (define) {
    'use strict';

    define([
        '../controllers/clustering-no-layers.controller',
        'text!../../templates/clustering-no-layers.html'
    ], function (clusteringNoLayersController, clusteringNoLayersTemplate) {
        return {
            // TODO - redefine the logic removing the map parameter and creating the map-cluster.view.js
            url: '/clusteringNoLayers/:key/:search/:category/:map/:enteName/:provinciaName',
            views: {
                'tab-home': {
                    template: clusteringNoLayersTemplate,
                    controller: clusteringNoLayersController
                }
            }
        };
    });
}(this.define));
