/*global L*/
(function (define) {
    'use strict';

    define([
        'lodash',
        'leafletRoutingMachine',
        'leafletControlGeocoder',
        'leafletIconLabel'
    ], function (_) {

        var getBounds,
            getCenter,
            getGeoData,
            getIcon,
            getMarkers,
            setRouting;

        getCenter = function (laboratory, zoom) {
            return {
                lat: laboratory.lat || 0,
                lng: laboratory.lng || 0,
                zoom: zoom || 17
            };
        };
        getIcon = function (index) {

            var iconObject = {
                labelText: String.fromCharCode(65 + index)
            };

            if (index === 0) {
                iconObject.iconUrl = 'images/marker-start.png';
            }

            return new L.Icon.Label.Default(iconObject);
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

            var fixZoom = 0.5;

            return leafletBoundsHelpers.createBoundsFromArray([
                [_.min(laboratories, 'lat').lat - fixZoom, _.min(laboratories, 'lng').lng - fixZoom],
                [_.max(laboratories, 'lat').lat + fixZoom, _.max(laboratories, 'lng').lng + fixZoom]
            ]);
        };
        setRouting = function ($scope, leafletData) {
            $scope.center = {};
            leafletData.getMap().then(function (map) {
                L.Routing.control({
                    // TODO - update the italian language $translate.use()
                    language: 'fr',
                    waypoints: [
                        L.latLng($scope.coords.lat, $scope.coords.lng),
                        L.latLng($scope.laboratory.lat, $scope.laboratory.lng)
                    ],
                    show: false,
                    createMarker: function (index, wp) {
                        return L.marker(wp.latLng, {
                            draggable: true,
                            icon: getIcon(index)
                        });
                    },
                    geocoder: L.Control.Geocoder.nominatim()
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
