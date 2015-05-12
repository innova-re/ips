(function (define, document) {
    'use strict';

    define([
        '../services/laboratories.service',
        'spin'
    ], function (laboratoriesService, Spinner) {

        return ['$scope', 'searchFactory', '$http', function ($scope, searchFactory, $http) {

            var items,
                promise,
                searchAction,
                spinner;

            spinner = new Spinner().spin();
            document.querySelector('body').appendChild(spinner.el);
            promise = $http.get('json/laboratories.json');
            searchAction = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.laboratories = matches;
                    }
                );
            };
            promise.then(function (payload) {
                items = laboratoriesService.getLaboratories.call(payload.data);
                $scope.laboratories = items;
                $scope.search = searchAction;
                spinner.stop();
            });
        }];
    });
}(this.define, this.document));
