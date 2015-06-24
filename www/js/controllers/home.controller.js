(function (define) {
    'use strict';

    define([
        '../utils/current-location.util',
        '../utils/services.util'
    ], function (currentLocationUtil, servicesUtil) {
        return ['$scope', '$translate', 'geolocation', '$ionicSideMenuDelegate', function ($scope, $translate, geolocation, $ionicSideMenuDelegate) {
            currentLocationUtil($scope, geolocation);
            $scope.lang = $translate.use();
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'gb') ? 'it' : 'gb');
                $scope.lang = $translate.use();
            };
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
            $scope.items = servicesUtil.getMenu();
        }];
    });
}(this.define));
