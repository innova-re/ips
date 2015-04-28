(function (define) {
    'use strict';

    define([
        'text!../../templates/instrument.html',
        '../controllers/instrument.controller'
    ], function (instrumentTemplate, instrumentController) {

        return {
            url: '/instruments/:name',
            views: {
                'tab-instruments': {
                    template: instrumentTemplate,
                    controller: instrumentController
                }
            }
        };
    });
}(this.define));
