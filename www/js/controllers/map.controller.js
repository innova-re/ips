(function (document, define, google) {
    'use strict';

    define([
        'app'
    ], function (app) {

        app.controller('MapCtrl', function($scope, $stateParams, Destinations) {

            $scope.destination = Destinations.get($stateParams.destinationId);
            var myLatlng = new google.maps.LatLng($scope.destination.lat, $scope.destination.lng);
            var mapOptions = {
                center: myLatlng,
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            var map = new google.maps.Map(
                document.getElementById("map"),
                mapOptions
            );
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map
            });
            var infowindow = new google.maps.InfoWindow({
                content: $scope.destination.name
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

        });

        return app;

    });
}(this.document, this.define, this.google));
