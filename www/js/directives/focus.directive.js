/*global window*/
(function (define) {
    'use strict';

    define([], function () {

        return ['$timeout', function ($timeout) {

            return {
                link: function (scope, element) {
                    scope.$watch('trigger', function (value) {
                        $timeout(function () {
                            element[0].focus();
                            scope.trigger = false;
                        });
                    });
                }
            };
        }];
    });
}(window.define));
