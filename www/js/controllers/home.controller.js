(function (define) {
    'use strict';

    define([
        '../utils/current-location.util'
    ], function (currentLocationUtil) {
        return ['$scope', '$translate', 'geolocation', '$ionicSideMenuDelegate', function ($scope, $translate, geolocation, $ionicSideMenuDelegate) {
            currentLocationUtil($scope, geolocation);
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'en') ? 'it' : 'en');
            };
            $scope.toggleLeft = function() {
                $ionicSideMenuDelegate.toggleLeft();
            };
            $scope.items = [
                {
                    name: 'Home',
                    icon: 'ion-home',
                    href: 'tabs.home'
                },
                {
                    name: 'laboratories',
                    icon: 'ion-erlenmeyer-flask',
                    href: 'tabs.search({key: "laboratories", search:"", category: ""})'
                },
                {
                    name: 'service.name',
                    icon: 'ion-gear-a',
                    href: 'tabs.search({key: "services", search:"", category: ""})'
                },
                {
                    name: 'instruments',
                    icon: 'ion-settings',
                    href: 'tabs.search({key: "instruments", search:"", category: ""})'
                },
                {
                    name: 'cluster.title',
                    icon: 'ion-earth',
                    href: 'tabs.clustering'
                }
            ];
        }];
    });
}(this.define));
