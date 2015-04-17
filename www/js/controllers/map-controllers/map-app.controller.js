(function (document, define, plugin, launchnavigator) {
    'use strict';

    define([
        '../../services/map-options.service'
    ], function (mapOptionsService) {

        return function ($scope, div) {

            var mapOptions,
                map,
                onMapReady;

            mapOptions = mapOptionsService($scope.laboratory.lat, $scope.laboratory.lng);
            map = plugin.google.maps.Map.getMap(div, mapOptions);
            onMapReady = function () {

                // Add get-direction button functionality
                var getDirectionButton,
                    MapBase,
                    mapBase,
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
                MapBase = function () {
                    plugin.google.maps.BaseClass.apply(this);
                };
                MapBase.prototype = new plugin.google.maps.BaseClass();
                mapBase = new MapBase();
                mapBase.on('getDirectionEvent', onGetDirection);
                getDirectionButton.addEventListener('click', function () {
                    mapBase.trigger('getDirectionEvent');
                });

                // Add a GroundOverlay
                var bounds = [ 
                    new plugin.google.maps.LatLng(39.269903, 9.123625),
                    new plugin.google.maps.LatLng(39.2709, 9.124589)
                ];
                map.addGroundOverlay({
                    url: 'www/images/monserrato-blocco-G-0.png',
                    bounds: bounds,
                    opacity: 0.8
                }, function (groundOverlay) {
                    map.showDialog();
                    map.animateCamera({
                        'target': bounds
                    });
                    groundOverlay.setBearing(-33.7696);
                });
            };
            map.on(plugin.google.maps.event.MAP_READY, onMapReady);

        };
    });
}(this.document, this.define, this.plugin, this.launchnavigator));
