(function (define) {
    'use strict';

    define([
        'lodash',
        '../utils/services.util'
    ], function (_, servicesUtil) {

        var _getCategory = function (value) {

            var macroarea = servicesUtil.getMacroarea();

            // TODO - for each laboratory you can have more macroarea
            // for now you are taken just the first one
            value.category = _.where(macroarea, {id: value.id})[0].macroarea_name;

            return value.category;
        };

        return {

            setCategories: function ($scope, key) {

                var obj = {},
                    category;

                $scope.categories = [];
                _.map($scope[key], function (value) {
                    category = value.category ? value.category : _getCategory(value);
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
