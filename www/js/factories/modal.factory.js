(function (define) {
    'use strict';

    define([
        'text!../../templates/modals/laboratory.modal.html',
        '../utils/services.util'
    ], function (laboratoryModalTemplate, servicesUtil) {

        return ['$ionicModal', function ($ionicModal) {

            var init = function ($scope) {

                $scope.openLaboratoryModal = function (laboratoryId) {
                    $scope.modal = $ionicModal.fromTemplate(laboratoryModalTemplate, {
                        scope: $scope,
                        animation: 'slide-in-up'
                    });
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(laboratoryId);
                    $scope.modal.services = servicesUtil.getDistinctServicesByLaboratoryId(laboratoryId);
                    $scope.modal.instruments = servicesUtil.getDistinctInstrumentsByLaboratoryId(laboratoryId);
                    $scope.modal.show();
                };
                $scope.$on('leafletDirectiveMarker.click', function (event, args) {
                    event.preventDefault();
                    $scope.openLaboratoryModal($scope.markers[args.markerName].id);
                });
            };

            return {
                init: init
            };
        }];
    });
}(this.define));
