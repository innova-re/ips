(function (define, svgPanZoom) {
    'use strict';

    define([
        'angular'
    ], function (angular) {

        return function () {

            return {
                link: function (scope, element) {
                    // enables panning and zooming of an SVG in an HTML document,
                    // with mouse events or custom JavaScript hooks
                    var setSvgPanZoom = function () {
                        var svgElement = angular.element(element[0].getSVGDocument()).find('svg');
                        svgPanZoom(svgElement[0]);
                    };
                    element.on('load', setSvgPanZoom);
                },
                restrict: 'A'
            };
        };
    });
}(this.define, this.svgPanZoom));
