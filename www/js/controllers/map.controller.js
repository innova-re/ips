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

            var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            var div = document.getElementsByClassName('map-canvas')[0];

            $scope.laboratory = laboratoriesService.get($stateParams.id);

            if ( app ) {
                //configuration
                latLng = new plugin.google.maps.LatLng($scope.laboratory.lat, $scope.laboratory.lng);
                mapOptions = {
                    backgroundColor: 'white',
                    mapType: plugin.google.maps.MapTypeId.HYBRID,
                    controls: {
                        compass: true,
                        myLocationButton: true,
                        indoorPicker: true,
                        zoom: true
                    },
                    gestures: {
                        scroll: true,
                        tilt: true,
                        rotate: true,
                        zoom: true
                    },
                    camera: {
                        latLng: latLng,
                        tilt: 30,
                        zoom: 20,
                        bearing: 50
                    }
                };
                // Initialize the map view
                map = plugin.google.maps.Map.getMap(div, mapOptions);

                map.addEventListener(plugin.google.maps.event.MAP_READY, function onMapInit(map) {
                  // The map is initialized, then show a map dialog
                    map.showDialog();
                });

            } else {

                latLng = new google.maps.LatLng($scope.laboratory.lat, $scope.laboratory.lng);
                mapOptions = {
                    center: latLng,
                    zoom: 19,
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                };
                map = new google.maps.Map(div, mapOptions);
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                });
            }
        };
    });
}(this.define, this.google, this.document, this.location));
