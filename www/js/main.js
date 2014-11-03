/* global require*/
(function () {
	'use strict';

	var vendorDir = '../lib/';

	requirejs.config({
		urlArgs: 'bust=' + Date.now(),
		paths: {
			angular: vendorDir + 'angular/angular',
			angularAnimate: vendorDir + 'angular-animate/angular-animate',
			ionic: vendorDir + 'ionic/js/ionic',
			ionicAngular: vendorDir + 'ionic/js/ionic-angular',
			angularUiRouter: vendorDir + 'angular-ui-router/release/angular-ui-router',
			text: vendorDir + 'text/text'

		},
		shim: {
			angular: {
				deps: [],
				exports: 'angular'
			},
			ionic: {
				deps: [],
				exports: 'ionic'
			}
		}
	});

	require([
		'angular',
		'ionic'
	], function (angular, ionic) {

		console.log(angular, ionic);

	});

})();
