/*global window*/
(function (define) {
    'use strict';

    define([], function () {

        var isKeyboard = window.cordova && window.cordova.plugins.Keyboard;

        return function () {

            return {
                link: function (scope, element) {
                    element[0].focus();
                    if (isKeyboard) {
                        scope.data.search === '' ? isKeyboard.show() : isKeyboard.hide();
                    }
                }
            };
        };
    });
}(window.define));
