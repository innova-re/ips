(function (define) {
    'use strict';

    define([
        './header-search.directive',
        './back-button.directive',
        './footer-modal.directive',
        './lab-card-modal.directive',
        './focus.directive'
    ], function (headerSearch, backButton, footerModal, labCardModal, focus) {

        return function (app) {
            app.directive('ipsHeaderSearch', headerSearch)
                .directive('ipsBackButton', backButton)
                .directive('ipsFooterModal', footerModal)
                .directive('ipsLabCardModal', labCardModal)
                .directive('ipsFocus',focus);
        };
    });
}(this.define));
