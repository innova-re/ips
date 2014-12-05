(function (define, google, document) {
    'use strict';

    define([
        '../services/destination.service'
    ], function (destinations) {

        return function ($scope, $stateParams) {

            var latLng,
                map,
                mapOptions,
                marker;

            $scope.destination = destinations.get($stateParams.id);
            latLng = new google.maps.LatLng($scope.destination.lat, $scope.destination.lng);
            mapOptions = {
                center: latLng,
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            map = new google.maps.Map(document.getElementById('map'),
                mapOptions);
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            google.maps.event.addListener(marker, 'click', function () {
                // TODO - change the route in order to display the internal image
            });
            $scope.map = map;
        };
    });
}(this.define, this.google, this.document));
