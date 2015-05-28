(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/geo-json.util'
    ], function (servicesUtil, geoJsonUtil) {

        return ['$scope', 'searchFactory', 'modalFactory', 'leafletBoundsHelpers', function ($scope, searchFactory, modalFactory, leafletBoundsHelpers) {

            var items,
                toggleTemplate;

            items = servicesUtil.getLaboratories();
            toggleTemplate = function () {
                $scope.mapOn = !$scope.mapOn;
            };
            $scope.laboratories = items;
            $scope.mapOn = false;
            $scope.openMap = function () {
                $scope.markers = geoJsonUtil.getMarkers($scope.laboratories);
                $scope.bounds = leafletBoundsHelpers.createBoundsFromArray(geoJsonUtil.getBounds($scope.laboratories));
                toggleTemplate();
            };
            $scope.closeMap = function () {
                toggleTemplate();
            };
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
        }];
    });
}(this.define));
