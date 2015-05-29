(function (define) {
    'use strict';

    define([
        'text!../../templates/modals/laboratory.modal.html',
        '../utils/services.util'
    ], function (laboratoryModalTemplate, servicesUtil) {

        return ['$ionicModal', function ($ionicModal) {

            var init = function ($scope) {

                $scope.openLaboratoryModal = function (laboratoryId) {
                    $scope.laboratory = servicesUtil.getLaboratoryByLaboratoryId(laboratoryId);
                    $scope.services = servicesUtil.getDistinctServicesByLaboratoryId(laboratoryId);
                    $scope.instruments = servicesUtil.getDistinctInstrumentsByLaboratoryId(laboratoryId);
                    $scope.modal = $ionicModal.fromTemplate(laboratoryModalTemplate, {
                        scope: $scope,
                        animation: 'slide-in-up'
                    });
                    $scope.modal.show();
                };
            };

            return {
                init: init
            };
        }];
    });
}(this.define));
