(function (define) {
    'use strict';

    define([], function () {
        return ['$scope', '$translate', function ($scope, $translate) {
            $scope.toggleLang = function () {
                $translate.use(($translate.use() === 'en') ? 'it' : 'en');
            }
        }];
    });
}(this.define));
