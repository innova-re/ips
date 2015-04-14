(function (define, document, plugin, launchnavigator, alert) {
    'use strict';

    define([
    ], function () {
        return function (latLng) {

            var getDirectionButton,
                MapBase,
                mapBase,
                onGetDirection;

            getDirectionButton = document.getElementsByClassName('map-get-direction')[0];

            onGetDirection = function (latLng) {
                // TODO - use latLng
                launchnavigator.navigate(
                    'Cittadella Universitaria di Monserrato, Monserrato Cagliari',
                    null,
                    function () {
                        return true;
                    },
                    function (error) {
                        alert('Plugin error: ' + error);
                    }
                );
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
}(this.define, this.document, this.plugin, this.launchnavigator, this.alert));
