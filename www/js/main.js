(function (requirejs) {
    'use strict';

    var vendorDir = '../lib/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            ionic: vendorDir + 'ionic/js/ionic.bundle',
            text: vendorDir + 'text/text',
            uiRouter: vendorDir + 'angular-ui-router/release/angular-ui-router'
        },
        deps: ['app']
    });
}(this.requirejs));
