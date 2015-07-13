(function (define) {
    'use strict';

    define([
        'lodash',
        '../utils/services.util',
        '../utils/scope-shared.util',
        '../utils/categories.util'
    ], function (_, servicesUtil, scopeSharedUtil, categoriesUtil) {

        return ['$scope', '$stateParams', '$log', 'searchFactory', '$state', 'modalFactory', 'dataService',
            function ($scope, $stateParams, $log, searchFactory, $state, modalFactory, dataService) {

            var key,
                args;

            key = $stateParams.key;
            args = [$scope, $stateParams, searchFactory, $state];
            $scope.stateParams = $stateParams;
            $scope.template = {
                url: 'templates/' + key + '.html'
            };
            $scope.title = key;
            // TODO - change the name scopeSharedUtil
            scopeSharedUtil(args, servicesUtil.get(key, $stateParams.category), function (values) {
                if ($scope.data.search.length > 2) {
                    $scope[key] = _.uniq(values, 'id');
                    $scope.results = $scope[key].length;
                    categoriesUtil.setCategories($scope, key);
                }
                if (key === 'laboratories') {
                    servicesUtil.setDistance($scope.laboratories, $scope.coords);
                } else {
                    $scope.laboratories = servicesUtil.getLaboratoriesByItems(values);
                    servicesUtil.setCoords($scope[key]);
                    servicesUtil.setDistance($scope[key], $scope.coords);
                }
                modalFactory($scope);
            });
            // TODO - When the server will be available you should use the dataService promise instead of servicesUtil
            dataService(key).then(function (items) {
                $log.info(items);
            });
        }];
    });
}(this.define));
