(function (define) {
    'use strict';

    define([
        'text!../../templates/home.html',
        '../controllers/home.controller'
    ], function (homeTemplate, homeController) {
        return {
            url: '/home',
            views: {
                'tab-home': {
                    template: homeTemplate,
                    controller: homeController
                }
            }
        };
    });
}(this.define));
