(function (define) {
    'use strict';

    define([
        '../services/services.service'
    ], function (servicesService) {

        return ['$q', '$timeout', function($q, $timeout) {

            var searchServices = function(searchFilter) {

                var deferred = $q.defer();
                var services = servicesService.get();
                var matches = services.filter(function(service) {
                    if(service.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) {
                        return true;
                    }
                })

                $timeout( function(){
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
