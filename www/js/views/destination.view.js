(function (define) {
    'use strict';

    define([
        'text!../../templates/destination.html',
        '../controllers/map.controller'
    ], function (destinationTemplate, mapController) {
        return {
            url: '/destination/:id',
            views: {
                'tab-destinations': {
                    template: destinationTemplate,
                    controller: mapController
                }
            }
        };
    });
}(this.define));
