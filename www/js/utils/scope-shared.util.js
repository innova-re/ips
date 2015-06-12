(function (define, location) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        return function (args, items, setScope) {

            var $scope = args[0], 
                $stateParams = args[1], 
                searchFactory = args[2],
                $state = args[3];

            $scope.data = {
                search: $stateParams.search
            };
            $scope.changeRoute = function () {
                location.hash = $state.$current.url.prefix + _.map($state.params, function (value, key) {
                    return encodeURIComponent(key === 'search' ? $scope.data.search : value);
                }).join('/');
            };
            $scope.search = function () {
                searchFactory.call(items, $scope.data.search).then(setScope);
            };
            $scope.search();
        };
    });
}(this.define, this.location));
