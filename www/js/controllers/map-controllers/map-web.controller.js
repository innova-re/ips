(function (define) {
    'use strict';

    define([], function () {

        return function ($scope, div) {

            var imageBounds,
                latLng,
                mapOptions,
                map,
                marker,
                overlay;

            imageBounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(39.269903, 9.123625), // Southwest corner of the bound.
                  new google.maps.LatLng(39.2709, 9.124589) // Northeast corner of the bound.
            );
            latLng = new google.maps.LatLng($scope.laboratory.lat, $scope.laboratory.lng);
            mapOptions = {
                center: latLng,
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            map = new google.maps.Map(div, mapOptions);
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            overlay = new google.maps.GroundOverlay(
                'images/monserrato-blocco-G-0.png',
                imageBounds
            );
            overlay.setMap(map);
        };
    });
}(this.define));
