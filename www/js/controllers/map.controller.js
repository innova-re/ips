(function (define, google, document, location) {
    'use strict';

    define([
        '../services/laboratories.service'
    ], function (laboratoriesService) {

        return function ($scope, $stateParams) {

            var latLng,
                map,
                mapOptions,
                marker;

            $scope.laboratory = laboratoriesService.get($stateParams.id);
            latLng = new google.maps.LatLng($scope.laboratory.lat, $scope.laboratory.lng);
            mapOptions = {
                center: latLng,
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            google.maps.event.addListener(marker, 'click', function () {
                location.href = '#/tab/planimetry/' + $stateParams.id;
            });
        };
    });
}(this.define, this.google, this.document, this.location));
