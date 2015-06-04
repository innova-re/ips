(function (define) {
    'use strict';

    define([
        'text!../../templates/partials/header-search.html'
    ], function (headerSearchTemplate) {

        return function () {

            return {
                restrict: 'E',
                template: headerSearchTemplate
            };
        }
    });
}(this.define));
