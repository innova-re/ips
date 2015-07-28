(function (define) {
    'use strict';

    define([
        '../utils/services.util',
        '../utils/clustering.util',
        'markercluster'
    ], function (servicesUtil, clusteringUtil) {

        return ['$scope', '$log', 'leafletData', 'modalFactory', 'dataService', function ($scope, $log, leafletData, modalFactory, dataService) {

            var setLayersMarkers = function (event) {

                // TODO - when changing the layer I got the following errors:
                // Uncaught TypeError: Cannot read property 'layerId' of undefined
                // Uncaught TypeError: Cannot read property 'hasLayer' of null

                var clusteringName,
                    items;

                clusteringName = event ? event.name : 'ente';
                items = (clusteringName === 'macroarea') ? servicesUtil.getMacroarea() : servicesUtil.get('laboratories', '', true);
                $scope.layers.overlays = clusteringUtil.getOverlays(items, clusteringName);
                $scope.markers = clusteringUtil.addressPointsToMarkers(items, clusteringName);
            };
            $scope.center = clusteringUtil.getCenter();
            $scope.layers = clusteringUtil.getLayers();
            setLayersMarkers();
            leafletData.getMap().then(function (map) {
                map.on('baselayerchange', setLayersMarkers);
            });
            modalFactory($scope);

            // TODO - When the server will be available you should use the dataService promise instead of servicesUtil
            dataService('laboratories').then(function (items) {
                $log.info(items);
            });

        }];
    });
}(this.define));
