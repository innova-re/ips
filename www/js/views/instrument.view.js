(function (define) {
    'use strict';

    define([
        'text!../../templates/instrument.html',
        '../controllers/instrument.controller'
    ], function (instrumentTemplate, instrumentController) {

        return {
            url: '/instruments/:name/:search',
            views: {
                'tab-instruments': {
                    template: instrumentTemplate,
                    controller: instrumentController
                }
            }
        };
    });
}(this.define));
