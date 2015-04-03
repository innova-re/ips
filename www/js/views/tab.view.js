(function (define) {
    'use strict';

    define([
        'text!../../templates/tabs.html',
        '../controllers/home.controller'
    ], function (tabsTemplate, homeController) {
        return {
            url: "/tab",
            abstract: true,
            template: tabsTemplate,
            controller: homeController
        };
    });
}(this.define));
