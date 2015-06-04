(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', function ($scope, $stateParams, searchFactory) {
            scopeSharedUtil(arguments, servicesUtil.getServices(), function (values) {
                $scope.services = servicesUtil.getDistinctItems(values, 'service_category_name');
            });
        }];
    });
}(this.define));
