(function (define, plugin) {
    'use strict';

    define([
        '../../services/map-options.service',
        '../../factories/on-map-init.factory'
    ], function (mapOptionsService, onMapInitFactory) {

        return function ($scope, div) {

            var latLng,
                mapOptions,
                map;

            latLng = new plugin.google.maps.LatLng($scope.laboratory.lat, $scope.laboratory.lng);
            mapOptions = mapOptionsService(latLng);
            map = plugin.google.maps.Map.getMap(div, mapOptions);

            map.on(plugin.google.maps.event.MAP_READY, onMapInitFactory);
        };
    });
}(this.define, this.plugin));
