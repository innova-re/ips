/* global require*/
(function () {
	'use strict';

	var vendorDir = '../lib/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			ionic: vendorDir + 'ionic/js/ionic.bundle',
			angularRouter: vendorDir + 'angular-ui-router/release/angular-ui-router',
			text: vendorDir + 'text/text'
		},
		shim: {
			ionic: {
				deps: [],
				exports: 'ionic'
			}
		}
	});

	require([
		'app',
        // TODO you should have a main.controller
        'controllers/dash.controller',
        'controllers/destination.controller',
        'controllers/map.controller',
        'app.config'
	], function () {
        // TODO - use angular.resumeBootstrap() or angular.bootstrap to manually start up angular application
	});

})();
