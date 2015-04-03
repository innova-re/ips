(function (define) {
    'use strict';

    define([
        'text!../../templates/instruments.html',
        '../controllers/instruments.controller'
    ], function (instrumentsTemplate, instrumentsController) {

        return {
            url: '/instruments',
            views: {
                'tab-instruments': {
                    template: instrumentsTemplate,
                    controller: instrumentsController
                }
            }
        };
    });
}(this.define));
