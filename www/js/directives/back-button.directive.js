(function (define) {
    'use strict';

    define([], function () {

        return ['$window', function ($window) {

            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.bind('click', function () {
                        $window.history.back();
                    });
                }
            };
        }];
    });
}(this.define));
