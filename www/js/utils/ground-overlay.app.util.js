(function (define, plugin, document) {
    'use strict';

    define([], function () {
        return function (map) {

            var bounds,
                floorZeroButton,
                groundOverlayCallback;

            floorZeroButton = document.getElementById('floor-zero');
            floorZeroButton.addEventListener('click', function () {
                map.trigger('onFloorClickEvent');
            });
            bounds = [
                // TODO get the coordinates from services
                new plugin.google.maps.LatLng(39.269903, 9.123625),
                new plugin.google.maps.LatLng(39.2709, 9.124589)
            ];
            groundOverlayCallback = function (groundOverlay) {
                map.showDialog();
                map.animateCamera({
                    'target': bounds
                });
                groundOverlay.setBearing(-33.7696);
                map.on('onFloorClickEvent', function () {
                    // TODO setImage does not change the image while setOpacity change the opacity 
                    groundOverlay.setImage('www/images/monserrato-blocco-G-1.png');
                    groundOverlay.setOpacity(1);
                });
            };
            map.addGroundOverlay({
                url: 'www/images/monserrato-blocco-G-0.png',
                bounds: bounds,
                opacity: 0.8
            }, groundOverlayCallback);
        };
    });
}(this.define, this.plugin, this.document));
