(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        return ['$q', '$timeout', function ($q, $timeout) {

            var deferred,
                matches;

            return function (searchFilterString) {

                matches = this.filter(function (items) {

                    var result = !searchFilterString ? true : _.map(searchFilterString.split(' '), function (searchFilter) {

                        var results = [];

                        searchFilter = searchFilter.slice(0, -1);
                        _.forIn(items, function (value) {
                            if (typeof value === 'string') {
                                results.push(value.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
                            }
                        });

                        return results.indexOf(true) !== -1;
                    });

                    return _.every(result, Boolean);
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
        }];
    });
}(this.define));
