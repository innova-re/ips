(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/collapse.util',
        'text!../../templates/modals/laboratory.modal.html',
        'text!../../templates/modals/service.modal.html',
        'text!../../templates/modals/instrument.modal.html',
        'text!../../templates/modals/categories.modal.html',
        'text!../../templates/modals/map.modal.html'
    ], function (servicesUtil, collapseUtil, laboratoryModalTemplate, serviceModalTemplate, instrumentModalTemplate, categoriesModalTemplate, mapModalTemplate) {

        return ['$ionicModal', function ($ionicModal) {

            var _setTemplate = function ($scope, template) {
                $scope.modal = $ionicModal.fromTemplate(template, {
                    scope: $scope,
                    animation: 'slide-in-up'
                });
            };

            // TODO - if you want to keep the history when making "openLaboratoryModal"
            // you should not use the modal!
            var _removeModal = function ($scope) {
                if ($scope.modal) {
                    $scope.modal.remove();
                }
            };

            var _isModalOn;

            return function ($scope) {
                $scope.openLaboratoryModal = function (laboratoryId) {
                    _removeModal($scope);
                    _setTemplate($scope, laboratoryModalTemplate);
                    collapseUtil($scope);
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(laboratoryId);
                    $scope.modal.services = servicesUtil.getDistinctServicesByLaboratoryId(laboratoryId);
                    $scope.modal.instruments = servicesUtil.getDistinctInstrumentsByLaboratoryId(laboratoryId);
                    $scope.modal.show();
                    _isModalOn = {
                        id: laboratoryId,
                        method: 'openLaboratoryModal'
                    };
                };
                $scope.openServiceModal = function (service) {
                    _removeModal($scope);
                    _setTemplate($scope, serviceModalTemplate);
                    collapseUtil($scope);
                    $scope.modal.service = service;
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(service.laboratory_id);
                    $scope.modal.show();
                    _isModalOn = {
                        id: service,
                        method: 'openServiceModal'
                    };
                };
                $scope.openInstrumentModal = function (instrument) {
                    _removeModal($scope);
                    _setTemplate($scope, instrumentModalTemplate);
                    collapseUtil($scope);
                    $scope.modal.instrument = instrument;
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(instrument.laboratory_id);
                    $scope.modal.show();
                    _isModalOn = {
                        id: instrument,
                        method: 'openInstrumentModal'
                    };
                };
                $scope.openCategoriesModal = function (categories) {
                    _setTemplate($scope, categoriesModalTemplate);
                    $scope.modal.categories = categories;
                    $scope.modal.show();
                };
                $scope.openMapModal = function () {
                    _setTemplate($scope, mapModalTemplate);
                    $scope.modal.show();
                };
                $scope.$on('leafletDirectiveMarker.click', function (event, args) {
                    event.preventDefault();
                    $scope.openLaboratoryModal(args.model.id);
                });
                $scope.$on('modal.removed', function() {
                    _isModalOn = false;
                });
                if (_isModalOn) {
                    $scope[_isModalOn.method](_isModalOn.id)
                }
            };
        }];
    });
}(this.define));
