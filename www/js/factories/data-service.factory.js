/*global window*/
(function (define) {
    'use strict';

    define([
        'lodash',
        'json!../../json/instruments.json',
        'json!../../json/laboratories.json',
        'json!../../json/services.json'
    ], function (_, instruments, laboratories, services) {

        return ['$q', '$http', '$log', function ($q, $http, $log) {

            var localData = {
                instruments: instruments,
                laboratories: laboratories,
                services: services
            };

            return function (key, category) {

                var deferred = $q.defer();
                var filterData;
                var source = (category === '') ? {} : {category: category};

                $http.get('http://localhost:8080/' + key).success(function (data) {
                    filterData = _.where(data, source);
                    deferred.resolve(filterData);
                }).error(function (msg, code) {
                    $log.error(msg, code);
                    filterData = _.where(localData[key], source);
                    deferred.resolve(filterData);
                });

                return deferred.promise;
            };
        }];
    });
}(window.define));
