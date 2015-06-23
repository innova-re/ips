(function (define) {
    'use strict';

    define([
        '../utils/current-location.util',
        '../utils/services.util'
    ], function (currentLocationUtil, servicesUtil) {
        return ['$scope', '$translate', 'geolocation', '$ionicSideMenuDelegate', function ($scope, $translate, geolocation, $ionicSideMenuDelegate) {
            currentLocationUtil($scope, geolocation);
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'en') ? 'it' : 'en');
            };
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
            $scope.items = servicesUtil.getMenu();
        }];
    });
}(this.define));
