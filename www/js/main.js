(function (requirejs) {
    'use strict';

    var vendorDir = '../lib/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendorDir + 'angular/angular',
            angularAnimate:   vendorDir + 'angular-animate/angular-animate',
            angularSanitize:  vendorDir + 'angular-sanitize/angular-sanitize',
            ionic: vendorDir + 'ionic/js/ionic',
            ionicAngular: vendorDir + 'ionic/js/ionic-angular',
            text: vendorDir + 'text/text',
            uiRouter: vendorDir + 'angular-ui-router/release/angular-ui-router'
        },
        shim: {
            angular : {
                exports : 'angular'
            },
            angularAnimate : {deps: ['angular']},
            angularSanitize : {deps: ['angular']},
            ionic :  {deps: ['angular'], exports : 'ionic'},
            ionicAngular: {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']},
            uiRouter: ['angular']
        },
        deps: ['app']
    });
}(this.requirejs));
