(function (define) {
    'use strict';

    define([], function () {

        return function ($scope, geolocation) {
            // TODO - fix the geolocation for the mobile devices
            // https://github.com/christocracy/cordova-background-geolocation-SampleApp
            // Default values
            $scope.coords = {
                lat: 39.220878,
                lng: 9.114131
            }
            geolocation.getLocation().then(function (data) {
                $scope.coords = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                };
            });
        };
    });
}(this.define));
