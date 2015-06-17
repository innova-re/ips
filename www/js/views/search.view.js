(function (define) {
    'use strict';

    define([
        '../controllers/search.controller',
        'text!../../templates/search.html'
    ], function (searchController, searchTemplate) {
        return {
            url: '/search/:key/:search/:category',
            views: {
                'tab-home': {
                    template: searchTemplate,
                    controller: searchController
                }
            }
        };
    });
}(this.define));
