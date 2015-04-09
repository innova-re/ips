(function (define, plugin) {
    'use strict';

    define([], function () {

        return function ($scope, div) {

            var latLng,
                mapOptions,
                map;

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
                    zoom: 18,
                    bearing: 50
                }
            };
            // Initialize the map view
            map = plugin.google.maps.Map.getMap(div, mapOptions);
            map.addEventListener(plugin.google.maps.event.MAP_READY, function onMapInit(map) {
                // The map is initialized, then show a map dialog
                map.showDialog();
            });
        };
    });
}(this.define, this.plugin));
