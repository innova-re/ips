/*global window*/
(function (define) {
    'use strict';

    define([], function () {

        return ['$q', '$http', '$log', function ($q, $http, $log) {

            return function (item) {

                var deferred = $q.defer();

                $http.get('http://localhost:8080/' + item).success(function (data) {
                    deferred.resolve(data);
                }).error(function (msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            };
        }];
    });
}(window.define));
