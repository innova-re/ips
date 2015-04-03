(function (define) {
    'use strict';

    define([
        'text!../../templates/home.html'
    ], function (homeTemplate, homeController) {
        return {
            url: '/home',
            views: {
                'tab-home': {
                    template: homeTemplate
                }
            }
        };
    });
}(this.define));
