(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        return {

            setCategories: function ($scope, key) {

                var obj = {},
                    category;

                $scope.categories = [];
                _.map($scope[key], function (value) {
                    category = value.category;
                    obj[category] = obj.hasOwnProperty(category) ? obj[category] + 1 : 1;
                });
                Object.keys(obj).forEach(function (key) {
                    $scope.categories.push({
                        name: key,
                        occurencies: obj[key]
                    });
                });
            }
        };
    });
}(this.define));
