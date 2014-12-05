(function (requirejs) {
    'use strict';

    var vendorDir = '../lib/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            ionic: vendorDir + 'ionic/js/ionic.bundle',
            angularRouter: vendorDir + 'angular-ui-router/release/angular-ui-router',
            text: vendorDir + 'text/text'
        },
        deps: ['app']
    });
}(this.requirejs));
