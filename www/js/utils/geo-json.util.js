(function (define) {
    'use strict';

    define([
    ], function () {

        var getCenter,
            getGeoData;

        getCenter = function () {
            return {
                lat: this.lat || 0,
                lng: this.lng || 0,
                zoom: 18
            };
        };

        getGeoData = function () {
            var geoData = {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                this.lng,
                                this.lat
                            ]
                        }
                    }
                ]
            };

            return {
                data: geoData
            };
        };

        return {
            getCenter: getCenter,
            getGeoData: getGeoData
        };
    });
}(this.define));
