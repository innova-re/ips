(function (define) {
    'use strict';

    define([
        'text!../../templates/modals/laboratory.modal.html',
        '../utils/services.util',
        'json!../../json/laboratories.json'
    ], function (laboratoryModalTemplate, servicesUtil, laboratoriesJson) {

        return ['$ionicModal', function ($ionicModal) {

            var init = function ($scope) {

                $scope.modal = $ionicModal.fromTemplate(laboratoryModalTemplate, {
                    scope: $scope,
                    animation: 'slide-in-up'
                });

                $scope.openModal = function (laboratoryId) {
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId.call(laboratoriesJson, laboratoryId);
                    $scope.modal.show();
                };
            };

            return {
                init: init
            };
        }];
    });
}(this.define));
