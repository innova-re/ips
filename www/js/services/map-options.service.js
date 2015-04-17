(function (define, plugin) {
    'use strict';

    define([
    ], function () {
        return function (lat, lng) {

            var latLng = new plugin.google.maps.LatLng(lat, lng);

            return {
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
        };
    });
}(this.define, this.plugin));
