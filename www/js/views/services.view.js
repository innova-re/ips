(function (define) {
    'use strict';

    define([
        'text!../../templates/services.html',
        '../controllers/services.controller'
    ], function (servicesTemplate, servicesController) {

        return {
            url: '/services/:search',
            views: {
                'tab-services': {
                    template: servicesTemplate,
                    controller: servicesController
                }
            }
        };
    });
}(this.define));
