(function (define) {
    'use strict';

    define([
        'text!../../templates/poli.html',
        '../controllers/poli.controller'
    ], function (poliTemplate, poliController) {

        return {
            url: '/poli',
            views: {
                'container': {
                    template: poliTemplate,
                    controller: poliController
                }
            }
        };
    });
}(this.define));
