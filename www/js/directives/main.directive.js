(function (define) {
    'use strict';

    define([
        './header-search.directive',
        './back-button.directive',
        './footer-modal.directive',
        './lab-card-modal.directive'
    ], function (headerSearch, backButton, footerModal, labCardModal) {
        
        return function (app) {
            app.directive('ipsHeaderSearch', headerSearch);
            app.directive('ipsBackButton', backButton);
            app.directive('ipsFooterModal', footerModal);
            app.directive('ipsLabCardModal', labCardModal);
        };
    });
}(this.define));
