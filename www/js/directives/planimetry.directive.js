(function (define, svgPanZoom) {
    'use strict';

    define([], function () {

        return function () {

            return {
                link: function (scope, element) {

                    var setSvgPanZoom = function () {
                        svgPanZoom(angular.element(element[0].getSVGDocument()).find('svg')[0]);
                    };

                    element.on('load', setSvgPanZoom)
                }
            };
        };
    });
}(this.define, this.svgPanZoom));
