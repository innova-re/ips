(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        var addressPointsToMarkers,
            getCenter,
            getOverlays,
            getLayers;

        getCenter = function () {
            return {
                lat: 39.214699,
                lng: 9.112757,
                zoom: 7
            };
        };
        getLayers = function () {

            var baselayersUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                baselayersType = 'xyz';

            return {
                baselayers: {
                    ente: {
                        name: 'ente',
                        type: baselayersType,
                        url: baselayersUrl
                    },
                    provincia: {
                        name: 'provincia',
                        type: baselayersType,
                        url: baselayersUrl
                    },
                    macroarea: {
                        name: 'macroarea',
                        type: baselayersType,
                        url: baselayersUrl
                    }
                }
            };
        };
        addressPointsToMarkers = function (laboratories, clusteringName) {
            return laboratories.map(function (object) {
                return {
                    layer: object[clusteringName + '_name'],
                    lat: object.lat,
                    lng: object.lng,
                    message: '<h4>' + object.name + '</h4>' + object.description
                };
            });
        };
        getOverlays = function (laboratories, clusteringName) {
            var items,
                overlays = {};

            items = _.uniq(_.pluck(laboratories, clusteringName + '_name'));
            items.map(function (value) {
                overlays[value] = {
                    name: value,
                    type: 'markercluster',
                    visible: true
                };
            });

            return overlays;
        };

        return {
            addressPointsToMarkers: addressPointsToMarkers,
            getCenter: getCenter,
            getOverlays: getOverlays,
            getLayers: getLayers
        };
    });
}(this.define));
