(function (define, location) {
    'use strict';

    define([], function () {
        return function (args, items, setScope) {

            var $scope = args[0], 
                $stateParams = args[1], 
                searchFactory = args[2],
                $state = args[3];

            $scope.data = {
                search: $stateParams.search
            };
            $scope.changeRoute = function () {
                location.hash = $state.$current.url.prefix + $scope.data.search;
            };
            $scope.search = function () {
                searchFactory.call(items, $scope.data.search).then(setScope);
            };
            $scope.search();
        };
    });
}(this.define, this.location));
