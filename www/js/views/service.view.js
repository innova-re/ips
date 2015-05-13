(function (define) {
    'use strict';

    define([
        'text!../../templates/service.html',
        '../controllers/service.controller'
    ], function (serviceTemplate, serviceController) {

        return {
            url: '/services/:name/:search',
            views: {
                'tab-services': {
                    template: serviceTemplate,
                    controller: serviceController
                }
            }
        };
    });
}(this.define));
