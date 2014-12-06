(function (define) {
    'use strict';

    define([
        'text!../../templates/destinations.html',
        '../controllers/destination.controller'
    ], function (destinationsTemplate, destinationsController) {

        return {
            url: '/destinations',
            views: {
                'container': {
                    template: destinationsTemplate,
                    controller: destinationsController
                }
            }
        };
    });
}(this.define));
