(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        'text!../../templates/modals/laboratory.modal.html',
        'text!../../templates/modals/service.modal.html',
        'text!../../templates/modals/instrument.modal.html',
        'text!../../templates/modals/categories.modal.html'
    ], function (servicesUtil, laboratoryModalTemplate, serviceModalTemplate, instrumentModalTemplate, categoriesModalTemplate) {

        return ['$ionicModal', function ($ionicModal) {

            var _setTemplate = function ($scope, template) {
                $scope.modal = $ionicModal.fromTemplate(template, {
                    scope: $scope,
                    animation: 'slide-in-up'
                });
            };

            return function ($scope) {
                $scope.openLaboratoryModal = function (laboratoryId) {
                    _setTemplate($scope, laboratoryModalTemplate);
                    // Ref. - Add a collapsible list - http://codepen.io/ionic/pen/uJkCz
                    $scope.toggleGroup = function (group) {
                        if ($scope.isGroupShown(group)) {
                            $scope.shownGroup = null;
                        } else {
                            $scope.shownGroup = group;
                        }
                    };
                    $scope.isGroupShown = function (group) {
                        return $scope.shownGroup === group;
                    };
                    $scope.modal.laboratory = servicesUtil.getLaboratoryByLaboratoryId(laboratoryId);
                    $scope.modal.services = servicesUtil.getDistinctServicesByLaboratoryId(laboratoryId);
                    $scope.modal.instruments = servicesUtil.getDistinctInstrumentsByLaboratoryId(laboratoryId);
                    $scope.modal.show();
                };
                $scope.openServiceModal = function (service) {
                    _setTemplate($scope, serviceModalTemplate);
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
                $scope.openCategoriesModal = function (categories) {
                    _setTemplate($scope, categoriesModalTemplate);
                    $scope.modal.categories = categories;
                    $scope.modal.show();
                };
                $scope.$on('leafletDirectiveMarker.click', function (event, args) {
                    event.preventDefault();
                    $scope.openLaboratoryModal($scope.markers[args.markerName].id);
                });
            };
        }];
    });
}(this.define));
