(function (define) {
    'use strict';

    define([], function () {
        return function (args, items, setScope) {

            var $scope = args[0], 
                $stateParams = args[1], 
                searchFactory = args[2];

            $scope.data = {
                search: $stateParams.search
            };
            $scope.search = function () {
                searchFactory.call(items, $scope.data.search).then(setScope);
            };
            $scope.search();
        };
    });
}(this.define));