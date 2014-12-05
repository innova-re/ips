(function (define) {
    'use strict';

    define([
        'text!../../templates/interior.html',
        '../controllers/interior.controller'
    ], function (interiorTemplate, interiorController) {
        return {
            url: '/interior/:id',
            views: {
                'tab-destinations': {
                    template: interiorTemplate,
                    controller: interiorController
                }
            }
        };
    });
}(this.define));
