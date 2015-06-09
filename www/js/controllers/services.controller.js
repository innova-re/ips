(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/scope-shared.util'
    ], function (servicesUtil, scopeSharedUtil) {

        return ['$scope', '$stateParams', 'searchFactory', '$state',
            function ($scope, $stateParams, searchFactory, $state) {
            scopeSharedUtil(arguments, servicesUtil.getServices(), function (values) {
                $scope.services = servicesUtil.getDistinctItems(values, 'service_category_name');
            });
        }];
    });
}(this.define));
