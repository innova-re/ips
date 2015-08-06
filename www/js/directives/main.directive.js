(function (define) {
    'use strict';

    define([
        './header-search.directive',
        './footer-modal.directive',
        './lab-card-modal.directive',
        './focus.directive'
    ], function (headerSearch, footerModal, labCardModal, focus) {

        return function (app) {
            app.directive('ipsHeaderSearch', headerSearch)
                .directive('ipsFooterModal', footerModal)
                .directive('ipsLabCardModal', labCardModal)
                .directive('ipsFocus',focus);
        };
    });
}(this.define));
