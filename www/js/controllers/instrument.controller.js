(function (define) {
    'use strict';

    define([
        '../utils/services.util'
    ], function (servicesUtil) {

        return ['$scope', '$stateParams', 'searchFactory', 'modalFactory',
            function ($scope, $stateParams, searchFactory, modalFactory) {

            var items,
                searchAction;

            searchAction = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.instruments = matches;
                    }
                );
            };
            items = servicesUtil.getInstrumentsByInstrumentName($stateParams.name);
            $scope.instrument_category_name = $stateParams.name;
            $scope.instruments = items;
            $scope.search = searchAction;
            // TODO - DRY see the service controller
            $scope.data = {
                search: $stateParams.search
            };
            searchAction();
            modalFactory.init($scope);
        }];
    });
}(this.define));
