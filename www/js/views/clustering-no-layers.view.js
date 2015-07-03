(function (define) {
    'use strict';

    define([
        '../controllers/clustering-no-layers.controller',
        'text!../../templates/clustering-no-layers.html'
    ], function (clusteringNoLayersController, clusteringNoLayersTemplate) {
        return {
            url: '/clusteringNoLayers/:key/:search/:category',
            views: {
                'tab-home': {
                    template: clusteringNoLayersTemplate,
                    controller: clusteringNoLayersController
                }
            }
        };
    });
}(this.define));
