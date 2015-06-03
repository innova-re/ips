(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering-no-layers.util',
        'markercluster'
    ], function (servicesUtil, clusteringNoLayersUtil) {

        return ['$scope', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers',
        function ($scope, searchFactory, modalFactory, leafletBoundsHelpers) {

            var items = servicesUtil.getLaboratories();

            $scope.laboratories = items;
            $scope.search = function () {
                searchFactory.searchObject.call(items, $scope.data.search).then(
                    function (matches) {
                        $scope.laboratories = matches;
                    }
                );
            };
            modalFactory.init($scope);
            $scope.$on('leafletDirectiveMarker.click', function (event, args) {
                event.preventDefault();
                $scope.openLaboratoryModal($scope.markers[args.markerName].id);
            });
            clusteringNoLayersUtil($scope, leafletBoundsHelpers);
        }];
    });
}(this.define));
