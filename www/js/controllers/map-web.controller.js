(function (define, google) {
    'use strict';

    define([], function () {

        return function ($scope, div) {
            var latLng,
                mapOptions,
                map,
                marker;

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
        };
    });
}(this.define, this.google));
