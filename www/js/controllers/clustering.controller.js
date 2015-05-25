(function (define) {
    'use strict';

    define([
        'angular',
        'json!../../json/laboratories.json',
        'json!../../json/macroarea.json',
        '../utils/clustering.util',
        'markercluster'
    ], function (angular, laboratories, macroarea, clusteringUtil) {

        return ['$scope', 'leafletData', function ($scope, leafletData) {

            angular.extend($scope, {
                center: {
                    lat: 39.214699,
                    lng: 9.112757,
                    zoom: 7
                },
                layers: clusteringUtil.getLayers()
            });
            leafletData.getMap().then(function (map) {
                map.on('baselayerchange', function (event) {
                    // TODO - when changing the layer I got the following errors:
                    // Uncaught TypeError: Cannot read property 'layerId' of undefined
                    // Uncaught TypeError: Cannot read property 'hasLayer' of null
                    // TODO - when changing the layer the radio input is not updated
                    var clusteringName,
                        items;

                    clusteringName = event.name;
                    items = (clusteringName === 'macroarea') ? macroarea : laboratories;
                    $scope.layers.overlays = clusteringUtil.getOverlays(items, clusteringName);
                    $scope.markers = clusteringUtil.addressPointsToMarkers(items, clusteringName);
                });
            });

            $scope.layers.overlays = clusteringUtil.getOverlays(laboratories, 'ente');
            $scope.markers = clusteringUtil.addressPointsToMarkers(laboratories, 'ente');
        }];
    });
}(this.define));
