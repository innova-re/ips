/*global window*/
(function (define) {
    'use strict';

    define([], function () {

        var isKeyboard = window.cordova && window.cordova.plugins.Keyboard;

        return ['$timeout', function ($timeout) {

            return {
                link: function (scope, element) {
                    $timeout(function () {
                        if (isKeyboard) {

                            var isScopeDataSearch = scope && scope.data && scope.data.search;

                            if (isScopeDataSearch === '') {
                                element[0].focus();
                                isKeyboard.show();
                            }
                        }
                    // TODO - the delay 0 causes the element[0] to be undefined in the simulator
                    }, 100);
                }
            };
        }];
    });
}(window.define));
