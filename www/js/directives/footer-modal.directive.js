(function (define) {
    'use strict';

    define([
        'text!../../templates/partials/footer-modal.html'
    ], function (footerModalTemplate) {

        return function () {

            return {
                restrict: 'E',
                template: footerModalTemplate
            };
        };
    });
}(this.define));
