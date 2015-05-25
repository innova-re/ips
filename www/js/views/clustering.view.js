(function (define) {
    'use strict';

    define([
        'text!../../templates/clustering.html',
        '../controllers/clustering.controller'
    ], function (clusteringTemplate, clusteringController) {
        return {
            url: '/clustering',
            views: {
                'tab-home': {
                    template: clusteringTemplate,
                    controller: clusteringController
                }
            }
        };
    });
}(this.define));
