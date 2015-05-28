(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        var getCenter,
            getGeoData,
            getBounds,
            getMarkers;

        getCenter = function (laboratory) {
            return {
                lat: laboratory.lat || 0,
                lng: laboratory.lng || 0,
                zoom: 17
            };
        };
        getMarkers = function (laboratories) {
            return laboratories.map(function (laboratory) {
                return {
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
        getBounds = function (laboratories) {
            return [
                [_.min(laboratories, 'lat').lat, _.min(laboratories, 'lng').lng],
                [_.max(laboratories, 'lat').lat, _.max(laboratories, 'lng').lng]
            ];
        };

        return {
            getCenter: getCenter,
            getGeoData: getGeoData,
            getBounds: getBounds,
            getMarkers: getMarkers
        };
    });
}(this.define));
