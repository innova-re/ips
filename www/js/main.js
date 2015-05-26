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
            lodash: vendorDir + 'lodash/lodash',
            markercluster: vendorDir + 'leaflet.markercluster/dist/leaflet.markercluster',
            text: vendorDir + 'requirejs-plugins/lib/text',
            json : vendorDir + 'requirejs-plugins/src/json',
            uiRouter: vendorDir + 'angular-ui-router/release/angular-ui-router',
            angularTranslate: vendorDir + 'angular-translate/angular-translate',
            leaflet: vendorDir + 'leaflet/dist/leaflet-src',
            // TODO - the angular-leaflet-directive taken with bower does not display the map on android!
            angularLeafletDirective: 'vendors/angular-leaflet-directive'
        },
        shim: {
            angular: {
                exports : 'angular'
            },
            lodash: {
                exports: '_'
            },
            angularLeafletDirective: {
                deps: ['angular', 'leaflet']
            },
            angularAnimate: {deps: ['angular']},
            angularSanitize: {deps: ['angular']},
            ionic:  {deps: ['angular'], exports : 'ionic'},
            ionicAngular: {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']},
            markercluster: ['angular', 'leaflet'],
            uiRouter: ['angular'],
            angularTranslate: ['angular']
        },
        deps: ['app']
    });
}(this.requirejs));
