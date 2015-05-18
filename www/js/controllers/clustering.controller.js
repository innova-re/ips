(function (define) {
    'use strict';

    define([
        'lodash',
        'angular',
        'json!../../json/laboratories.json',
        '../utils/provincie.util',
        'markercluster'
    ], function (_, angular, laboratories, provincieUtil) {

        return ['$scope', function ($scope) {

            var addressPointsToMarkers,
                getOverlays;

            addressPointsToMarkers = function (laboratories) {
                return laboratories.map(function (object) {
                    return {
                        layer: provincieUtil[object.id_provincia],
                        lat: object.lat,
                        lng: object.lng,
                        message: '<h4>' + object.name + '</h4>' + object.description
                    };
                });
            };
            getOverlays = function (laboratories) {
                var city_names,
                    key,
                    overlays = {};

                city_names = _.uniq(laboratories, 'id_provincia');

                city_names.map(function (object) {
                    key = provincieUtil[object.id_provincia];
                    overlays[key] = {
                        name: key,
                        type: 'markercluster',
                        visible: true
                    };
                });

                return overlays;
            };
            angular.extend($scope, {
                center: {
                    lat: 39.214699,
                    lng: 9.112757,
                    zoom: 7
                },
                layers: {
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            type: 'xyz',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        }
                    }
                }
            });
            $scope.layers.overlays = getOverlays(laboratories);
            $scope.markers = addressPointsToMarkers(laboratories);
        }];
    });
}(this.define));
