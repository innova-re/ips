(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', function ($scope, $stateParams, searchFactory) {
            scopeSharedUtil(arguments, servicesUtil.getInstruments(), function (values) {
                $scope.instruments = servicesUtil.getDistinctItems(values, 'instrument_category_name');
            });
        }];
    });
}(this.define));
