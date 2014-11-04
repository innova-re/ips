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
		'app'
	], function (app) {

		app.config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                // Each tab has its own nav history stack:
                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            templateUrl: 'templates/tab-dash.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('tab.destinations', {
                    url: '/destinations',
                    views: {
                        'tab-destinations': {
                            templateUrl: 'templates/tab-destinations.html',
                            controller: 'DestinationsCtrl'
                        }
                    }
                })
                .state('tab.destination-detail', {
                    url: '/destination/:destinationId',
                    views: {
                        'tab-destinations': {
                            templateUrl: 'templates/destination-detail.html',
                            controller: 'MapCtrl'
                        }
                    }
                })
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/dash');
        });

	});

})();
