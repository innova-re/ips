(function (define) {
    'use strict';

    define([], function () {

        return function ($scope, geolocation) {
            geolocation.getLocation().then(function (data) {
                $scope.coords = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                };
            });
        };
    });
}(this.define));
