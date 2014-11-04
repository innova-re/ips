/* global define */
(function () {
	'use strict';

	define([
		'../app',
		'../services/destination.service'
	], function (app, Destinations) {

		app.controller('DestinationsCtrl', function($scope, Destinations) {

			$scope.destinations = Destinations.all();

        });

		return app;

	});
})();
