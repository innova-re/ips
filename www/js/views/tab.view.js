(function (define) {
    'use strict';

    define([
        'text!../../templates/tabs.html'
    ], function (tabsTemplate) {
        return {
            url: "/tab",
            abstract: true,
            template: tabsTemplate
        };
    });
}(this.define));
