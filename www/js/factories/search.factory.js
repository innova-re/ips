/*global window*/
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
                    items.foundWords = [];

                    var result = !searchFilterString ? true : _.map(searchFilterString.split(' '), function (searchFilter) {

                        if (searchFilter.length < 4) {
                            return false;
                        }

                        var results = [];
                        var searchFilterNoLastVowel;

                        searchFilterNoLastVowel = searchFilter.replace(/[aeiou]$/i,'');
                        _.forIn(items, function (value) {
                            if (typeof value === 'string' && value.toLowerCase().indexOf(searchFilterNoLastVowel.toLowerCase()) !== -1) {
                                results.push(true);
                                items.foundWords.push(searchFilter);
                                return false;
                            }
                        });

                        return results.indexOf(true) !== -1;
                    });
                    items.foundWords = _.uniq(items.foundWords);

                    return _.compact(result).length > 0;
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
        }];
    });
}(window.define));
