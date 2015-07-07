/*global window*/
(function (define) {
    'use strict';

    define([], function () {

        return ['$timeout', function ($timeout) {

            return {
                scope: {
                    trigger: '=ipsFocus'
                },
                link: function (scope, element) {
                    scope.$watch('trigger', function (value) {
                        if (value === true) {
                            $timeout(function () {
                                element[0].focus();
                                scope.trigger = false;
                            });
                        }
                    });
                }
            };
        }];
    });
}(window.define));
