(function (define) {
    'use strict';

    define([
    ], function () {
        return function (map) {

            var getGroundOverlayOptions,
                imageBounds,
                overlay,
                setOverlay;

            imageBounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(39.269903, 9.123625), // Southwest corner of the bound.
                  new google.maps.LatLng(39.2709, 9.124589) // Northeast corner of the bound.
            );
            getGroundOverlayOptions = function () {
                return {
                    opacity: 0.5,
                    map: map
                }
            }
            setOverlay = function (image) {
                overlay = new google.maps.GroundOverlay(
                    'images/' + image,
                    imageBounds,
                    getGroundOverlayOptions()
                );
            };
            setOverlay('monserrato-blocco-G-0.png');

            // Indoor action - change floors
            var floorZeroButton,
                floorOneButton,
                onFloorClick,
                setOverlay;

            floorZeroButton = document.getElementById('floor-zero');
            floorOneButton = document.getElementById('floor-one');
            onFloorClick = function (event) {
                overlay.setMap(null);
                setOverlay($(event.target).attr('data-img'));
                overlay.setMap(map);
            };
            floorZeroButton.addEventListener('click', onFloorClick);
            floorOneButton.addEventListener('click', onFloorClick);
        }
    });
}(this.define));
