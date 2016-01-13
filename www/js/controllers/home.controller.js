(function (define) {
    'use strict';

    define([
        '../utils/current-location.util',
        '../utils/services.util',
        'text!../../templates/modals/notifications.modal.html'
    ], function (currentLocationUtil, servicesUtil, notificationsModalTemplate) {
        return ['$scope', '$translate', 'geolocation', '$ionicSideMenuDelegate', '$ionicModal', function ($scope, $translate, geolocation, $ionicSideMenuDelegate, $ionicModal) {

            // TODO - remove duplicate code; see modal.factory.js -> _setTemplate
            var _setTemplate = function ($scope, template) {
                $scope.modal = $ionicModal.fromTemplate(template, {
                    scope: $scope,
                    animation: 'slide-in-up'
                });
            };

            currentLocationUtil($scope, geolocation);
            $scope.lang = $translate.use();
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'gb') ? 'it' : 'gb');
                $scope.lang = $translate.use();
            };
            $scope.toggleLeft = function () {
                $ionicSideMenuDelegate.toggleLeft();
            };
            $scope.openNotificationsModal = function () {
                _setTemplate($scope, notificationsModalTemplate);
                $scope.modal.show();
            };
            $scope.items = servicesUtil.getMenu();
        }];
    });
}(this.define));
