(function (document, define, plugin, launchnavigator) {
    'use strict';

    define([
        '../../utils/map-base.util',
        '../../services/map-options.service',
        '../../utils/ground-overlay.app.util'
    ], function (MapBase, mapOptionsService, groundOverlayUtil) {

        return function ($scope, div) {

            var mapOptions,
                map,
                onMapReady,
                mapBase;

            mapOptions = mapOptionsService($scope.laboratory.lat, $scope.laboratory.lng);
            map = plugin.google.maps.Map.getMap(div, mapOptions);
            onMapReady = function () {

                // Add get-direction button functionality
                var getDirectionButton,
                    onGetDirection;

                getDirectionButton = document.getElementsByClassName('map-get-direction')[0];
                onGetDirection = function () {
                    launchnavigator.navigate(
                        [$scope.laboratory.lat, $scope.laboratory.lng],
                        null,
                        function () {
                            return true;
                        },
                        function (error) {
                            alert.log('Plugin error: ' + error);
                        }
                    );
                };
                mapBase = new MapBase();
                mapBase.on('getDirectionEvent', onGetDirection);
                getDirectionButton.addEventListener('click', function () {
                    mapBase.trigger('getDirectionEvent');
                });

                // Add GroundOverlay
                groundOverlayUtil(map);
            };
            map.on(plugin.google.maps.event.MAP_READY, onMapReady);

        };
    });
}(this.document, this.define, this.plugin, this.launchnavigator));
