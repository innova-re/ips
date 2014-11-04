/* global define */
(function () {
    'use strict';

    define([
        'app',
        'services/destination.service'
    ], function (app, Destinations) {

        app.controller('MapCtrl', function($scope, $ionicLoading, $compile, $stateParams, Destinations) {

            $scope.destination = Destinations.get($stateParams.destinationId);
            var initialize =  function () {
                var myLatlng = new google.maps.LatLng($scope.destination.lat, $scope.destination.lng);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 19,
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Uluru (Ayers Rock)'
                });
                $scope.map = map;
            }

            // TODO - fix the call of initialize
            google.maps.event.addDomListener(window, 'load', initialize);
            initialize();

        });

        return app;

    });
})();
