(function (define) {
    'use strict';

    define([
        'text!../../templates/services.html',
        '../controllers/services.controller'
    ], function (servicesTemplate, servicesController) {

        return {
            url: '/services/:name',
            views: {
                'container': {
                    template: servicesTemplate,
                    controller: servicesController
                }
            }
        };
    });
}(this.define));
