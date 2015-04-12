(function (define, document, setTimeout, confirm, plugin) {
    'use strict';

    define([
    ], function () {
        return function (map, latLng) {

            var currentLocation,
                getDirectionButton,
                MapBase,
                mapBase,
                onLocationSuccess,
                onGetDirection;

            getDirectionButton = document.getElementsByClassName('map-get-direction')[0];
            onLocationSuccess = function (result) {
                currentLocation = result;
            };
            map.getMyLocation({}, onLocationSuccess);
            onGetDirection = function (latLng) {
                map.addMarker({
                    position: latLng,
                    title: "Destination"
                }, function (marker) {
                    marker.showInfoWindow();
                    setTimeout(function () {
                        if (confirm('Do you want to go?')) {
                            plugin.google.maps.external.launchNavigation({
                                from: currentLocation,
                                to: latLng
                            });
                        }
                    }, 0);
                });
            };
            MapBase = function () {
                plugin.google.maps.BaseClass.apply(this);
            };
            MapBase.prototype = new plugin.google.maps.BaseClass();
            mapBase = new MapBase();
            mapBase.on('getDirectionEvent', onGetDirection);
            getDirectionButton.addEventListener('click', function () {
                mapBase.trigger('getDirectionEvent', latLng);
            });
        };
    });
}(this.define, this.document, this.setTimeout, this.confirm, this.plugin));
