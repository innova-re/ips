(function() {
	'use strict';

	define([
		'app'
	], function (app) {

		return app.config(function($stateProvider, $urlRouterProvider) {

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
