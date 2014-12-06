(function (define) {
    'use strict';

    define([
        'text!../../templates/planimetry.html',
        '../controllers/planimetry.controller'
    ], function (planimetryTemplate, interiorController) {
        return {
            url: '/planimetry/:id',
            views: {
                'container': {
                    template: planimetryTemplate,
                    controller: interiorController
                }
            }
        };
    });
}(this.define));
