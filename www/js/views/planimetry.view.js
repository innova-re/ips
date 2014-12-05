(function (define) {
    'use strict';

    define([
        'text!../../templates/planimetry.html',
        '../controllers/planimetry.controller'
    ], function (interiorTemplate, interiorController) {
        return {
            url: '/planimetry/:id',
            views: {
                'container': {
                    template: interiorTemplate,
                    controller: interiorController
                }
            }
        };
    });
}(this.define));
