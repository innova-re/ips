(function (define) {
    'use strict';

    define([
        '../utils/current-location.util'
    ], function (currentLocationUtil) {
        return ['$scope', '$translate', 'geolocation', function ($scope, $translate, geolocation) {
            currentLocationUtil($scope, geolocation);
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'en') ? 'it' : 'en');
            }
        }];
    });
}(this.define));
