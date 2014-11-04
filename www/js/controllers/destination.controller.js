/* global define */
(function () {
	'use strict';

	define([
		'app',
		'services/destination.service'
	], function (app) {

		app.controller('DestinationsCtrl', function($scope, Destinations) {

			$scope.destinations = Destinations.all();

        });

		return app;

	});
})();
