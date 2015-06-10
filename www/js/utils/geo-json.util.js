(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        var getCenter,
            getGeoData,
            getBounds,
            getMarkers,
            setRouting;

        getCenter = function (laboratory, zoom) {
            return {
                lat: laboratory.lat || 0,
                lng: laboratory.lng || 0,
                zoom: zoom || 17
            };
        };
        getMarkers = function (laboratories) {

            var groupName = Math.random().toString();

            return laboratories.map(function (laboratory) {
                return {
                    group: groupName,
                    lat: laboratory.lat,
                    lng: laboratory.lng,
                    id: laboratory.id
                };
            });
        };

        getGeoData = function (laboratory) {
            return {
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'Point',
                                coordinates: [
                                    laboratory.lng,
                                    laboratory.lat
                                ]
                            }
                        }
                    ]
                }
            };
        };
        getBounds = function (laboratories, leafletBoundsHelpers) {
            return leafletBoundsHelpers.createBoundsFromArray([
                [_.min(laboratories, 'lat').lat, _.min(laboratories, 'lng').lng],
                [_.max(laboratories, 'lat').lat, _.max(laboratories, 'lng').lng]
            ]);
        };
        setRouting = function ($scope, leafletData) {
            $scope.center = {};
            leafletData.getMap().then(function (map) {
                L.Routing.control({
                  waypoints: [
                    // TODO - get real local coordinate
                    L.latLng(39.222074, 9.113754),
                    L.latLng($scope.laboratory.lat, $scope.laboratory.lng)
                  ]
                }).addTo(map);
            });
        };

        return {
            getCenter: getCenter,
            getGeoData: getGeoData,
            getBounds: getBounds,
            getMarkers: getMarkers,
            setRouting: setRouting
        };
    });
}(this.define));
