(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {

        return ['$q', '$timeout', function ($q, $timeout) {

            var deferred,
                matches,
                searchItem,
                searchObject;

            // TODO - you should have just a method to search items
            // TODO - you should pass the keys to search (for know you search in all keys)
            searchItem = function (searchFilterString) {
                matches = this.filter(function (items) {

                    var result = _.map(searchFilterString.split(' '), function (searchFilter) {
                        return items.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    });

                    return _.every(result, Boolean);

                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
            searchObject = function (searchFilterString) {
                matches = this.filter(function (items) {

                    var result = _.map(searchFilterString.split(' '), function (searchFilter) {

                        var results = [];

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

            return {
                searchItem: searchItem,
                searchObject: searchObject
            };
        }];
    });

}(this.define));
