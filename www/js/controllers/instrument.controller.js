(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory', function ($scope, $stateParams, searchFactory, modalFactory) {
            scopeSharedUtil(arguments, servicesUtil.getInstrumentsByInstrumentName($stateParams.name), function (values) {
                $scope.instruments = values;

            });
            $scope.instrument_category_name = $stateParams.name;
            modalFactory.init($scope);
        }];
    });
}(this.define));
