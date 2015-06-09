(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering.util',
        'markercluster'
    ], function (servicesUtil, clusteringUtil) {

        return ['$scope', 'leafletData', 'modalFactory', function ($scope, leafletData, modalFactory) {

            var setLayersMarkers = function (event) {

                // TODO - when changing the layer I got the following errors:
                // Uncaught TypeError: Cannot read property 'layerId' of undefined
                // Uncaught TypeError: Cannot read property 'hasLayer' of null

                var clusteringName,
                    items;

                clusteringName = event ? event.name : 'ente';
                items = (clusteringName === 'macroarea') ? servicesUtil.getMacroarea() : servicesUtil.getLaboratories();
                $scope.layers.overlays = clusteringUtil.getOverlays(items, clusteringName);
                $scope.markers = clusteringUtil.addressPointsToMarkers(items, clusteringName);
            };

            $scope.center = clusteringUtil.getCenter();
            $scope.layers = clusteringUtil.getLayers();
            setLayersMarkers();
            leafletData.getMap().then(function (map) {
                map.on('baselayerchange', setLayersMarkers);
            });
            modalFactory.init($scope);
        }];
    });
}(this.define));
