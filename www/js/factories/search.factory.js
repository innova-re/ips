(function (define) {
    'use strict';

    define([], function () {

        return ['$q', '$timeout', '$stateParams', function($q, $timeout, $stateParams) {

            var searchServices = function(searchFilter, items) {
                
                var deferred = $q.defer();
                var matches = items.filter(function(service) {
                    if(service.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) {
                        return true;
                    }
                })

                $timeout(function () {
                    deferred.resolve( matches );
                }, 100);

                return deferred.promise;

            };

            return {
                searchServices: searchServices
            }
        }];
    });

}(this.define));
