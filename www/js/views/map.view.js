(function (define) {
    'use strict';

    define([
        'text!../../templates/map.html',
        '../controllers/map.controller'
    ], function (mapTemplate, mapController) {
        return {
            url: '/map/:id',
            views: {
                'container': {
                    template: mapTemplate,
                    controller: mapController
                }
            }
        };
    });
}(this.define));
