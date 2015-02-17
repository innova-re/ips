(function (define, svgPanZoom) {
    'use strict';

    define([
        'angular',
        'text!../../svg/planimetry.svg'
    ], function (angular, planimetrySVG) {
        return function () {
            return {
                compile: function (element) {
                    svgPanZoom(element[0]);
                },
                restrict: 'E',
                replace: true,
                transclude: true,
                template: planimetrySVG
            };
        };
    });
}(this.define, this.svgPanZoom));
