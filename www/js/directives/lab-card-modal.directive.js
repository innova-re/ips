(function (define) {
    'use strict';

    define([
        'text!../../templates/partials/lab-card.html'
    ], function (labCardModal) {

        return function () {

            return {
                restrict: 'E',
                template: labCardModal
            };
        };
    });
}(this.define));
