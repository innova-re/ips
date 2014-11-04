/* global define */
(function () {
	'use strict';

	define([
		'../app'
	], function (app) {

		app.controller('DashCtrl', function($scope) {

			console.log('Scope: ', $scope);

        });

		return app;

	});
})();
