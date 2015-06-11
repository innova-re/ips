(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        'text!../../templates/modals/laboratory.modal.html',
        'text!../../templates/modals/service.modal.html',
        'text!../../templates/modals/instrument.modal.html'
    ], function (servicesUtil, laboratoryModalTemplate, serviceModalTemplate, instrumentModalTemplate) {

        return ['$ionicModal', function ($ionicModal) {

            var init,
                _setTemplate;

            _setTemplate = function ($scope, template) {
                $scope.modal = $ionicModal.fromTemplate(template, {
                    scope: $scope,
                    animation: 'slide-in-up'
                });
            };
            init = function ($scope) {
                $scope.openLaboratoryModal = function (laboratoryId) {
                    _setTemplate($scope, laboratoryModalTemplate);
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(laboratoryId);
                    $scope.modal.services = servicesUtil.getDistinctServicesByLaboratoryId(laboratoryId);
                    $scope.modal.instruments = servicesUtil.getDistinctInstrumentsByLaboratoryId(laboratoryId);
                    $scope.modal.show();
                };
                $scope.openServiceModal = function (service) {
                    _setTemplate($scope, serviceModalTemplate);
                    console.log(service);
                    $scope.modal.service = service;
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(service.laboratory_id);
                    $scope.modal.show();
                };
                $scope.openInstrumentModal = function (instrument) {
                    _setTemplate($scope, instrumentModalTemplate);
                    $scope.modal.instrument = instrument;
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(instrument.laboratory_id);
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
