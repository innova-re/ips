(function (define, svgPanZoom) {
    'use strict';

    define([
        'angular'
    ], function (angular) {

        return function () {

            return {
                link: function (scope, element) {

                    var setSvgPanZoom = function () {
                        svgPanZoom(angular.element(element[0].getSVGDocument()).find('svg')[0]);
                    };

                    element.on('load', setSvgPanZoom);
                },
                restrict: 'A'
            };
        };
    });
}(this.define, this.svgPanZoom));
