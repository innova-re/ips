(function (define) {
    'use strict';

    define([], function () {

        return ['$q', '$timeout', function ($q, $timeout) {

            var deferred,
                matches,
                searchServices,
                searchServiceByDescrition,
                searchLaboratories,
                searchIntruments,
                searchIntrumentsByDescrition;

            searchServices = function (searchFilter, items) {

                matches = items.filter(function (service) {
                    if (service.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) {
                        return true;
                    }
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
            searchServiceByDescrition = function (searchFilter, items) {

                var descriptionMatch,
                    nameMatch;

                matches = items.filter(function (service) {
                    descriptionMatch = service.service_description.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    nameMatch = service.service_name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    if (descriptionMatch || nameMatch) {
                        return true;
                    }
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
            searchLaboratories = function (searchFilter, items) {

                var infoMatch,
                    nameMatch;

                matches = items.filter(function (laboratories) {
                    infoMatch = laboratories.info.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    nameMatch = laboratories.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    if (infoMatch || nameMatch) {
                        return true;
                    }
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
            searchIntruments = function (searchFilter, items) {

                matches = items.filter(function (instrument) {
                    if (instrument.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) {
                        return true;
                    }
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };
            searchIntrumentsByDescrition = function (searchFilter, items) {

                var descriptionMatch,
                    nameMatch;

                matches = items.filter(function (instrument) {
                    descriptionMatch = instrument.instrument_description.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    nameMatch = instrument.instrument_name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1;
                    if (descriptionMatch || nameMatch) {
                        return true;
                    }
                });
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(matches);
                }, 100);

                return deferred.promise;
            };

            return {
                searchServices: searchServices,
                searchServiceByDescrition: searchServiceByDescrition,
                searchLaboratories: searchLaboratories,
                searchIntruments: searchIntruments,
                searchIntrumentsByDescrition: searchIntrumentsByDescrition
            };
        }];
    });

}(this.define));
