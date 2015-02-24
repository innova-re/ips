(function (define) {
    'use strict';

    define([
        'text!../../templates/laboratories.html',
        '../controllers/laboratories.controller'
    ], function (laboratoriesTemplate, laboratoriesController) {

        return {
            url: '/laboratories/:id',
            views: {
                'container': {
                    template: laboratoriesTemplate,
                    controller: laboratoriesController
                }
            }
        };
    });
}(this.define));
