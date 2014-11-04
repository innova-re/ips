/*global angular*/
(function (document, requirejs, require) {
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
		'app.config'
	], function () {

		// manually start up angular application
		angular.bootstrap(document, ['starter']);

	});

}(this.document, this.requirejs, this.require));
