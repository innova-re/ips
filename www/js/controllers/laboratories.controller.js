(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/geo-json.util',
        'markercluster'
    ], function (servicesUtil, geoJsonUtil) {

        return ['$scope', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers', function ($scope, searchFactory, modalFactory, leafletBoundsHelpers) {

            var items,
                toggleTemplate,
                inputSearch;

            items = servicesUtil.getLaboratories();
            toggleTemplate = function () {
                $scope.mapOn = !$scope.mapOn;
            };
            $scope.laboratories = items;
            $scope.mapOn = false;
            $scope.openMap = function () {
                $scope.markers = geoJsonUtil.getMarkers($scope.laboratories, inputSearch || ' ');
                $scope.bounds = geoJsonUtil.getBounds($scope.laboratories, leafletBoundsHelpers);
                toggleTemplate();
            };
            $scope.closeMap = function () {
                toggleTemplate();
            };
            $scope.search = function () {
                inputSearch = $scope.data.search;
                searchFactory.searchObject.call(items, inputSearch).then(
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
        }];
    });
}(this.define));
