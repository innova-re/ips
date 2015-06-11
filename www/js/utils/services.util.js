(function (define) {
    'use strict';

    define([
        'lodash',
        'json!../../json/laboratories.json',
        'json!../../json/services.json',
        'json!../../json/instruments.json',
        'json!../../json/macroarea.json'
    ], function (_, laboratories, services, instruments, macroarea) {
        
        return {

            /*
             * Instruments Methods
             */
            getInstruments: function () {
                return instruments;
            },
            getDistinctInstrumentsByLaboratoryId: function (laboratoryId) {

                var  instrumentsByLaboratoryId = _.where(instruments, {laboratory_id: laboratoryId});

                return _.unique(instrumentsByLaboratoryId.map(function (object) {
                    return object.instrument_name;
                }));
            },
            getInstrumentsByInstrumentName: function (instrumentName) {
                return _.where(instruments, {instrument_category_name: instrumentName});
            },
            getInstrumentsByLaboratoryId: function (laboratoryId) {
                return _.where(instruments, {laboratory_id: laboratoryId});
            },

            /*
             * Laboratories Methods
             */
            getLaboratories: function () {
                return laboratories;
            },
            getLaboratoryByLaboratoryId: function (laboratoryId) {
                return _.where(laboratories, {
                    id: parseInt(laboratoryId, 10)
                })[0];
            },
            getLaboratoryByServiceId: function (serviceId) {
                return _.where(services, {service_id: serviceId})[0];
            },
            getLaboratoriesByItems: function (items) {

                var ids = _.unique(items.map(function (item) {
                    return item.laboratory_id;
                }));

                return ids.map(function (laboratoryId) {
                    return _.where(laboratories, {
                        id: parseInt(laboratoryId, 10)
                    })[0];
                });
            },

            /*
             * Macroarea Methods
             */
            getMacroarea: function () {
                return macroarea;
            },

            /*
             * Services Methods
             */
            getDistinctServicesByLaboratoryId: function (laboratoryId) {

                var  servicesByLaboratoryId = _.where(services, {laboratory_id: laboratoryId});

                return _.unique(servicesByLaboratoryId.map(function (object) {
                    return object.service_name;
                }));
            },
            getServices: function () {
                return services;
            },
            getServiceByServiceId: function (serviceId) {
                return _.where(services, {
                    service_id: parseInt(serviceId, 10)
                })[0];
            },
            getServicesByCategoryServiceName: function (serviceName) {
                return _.where(services, {service_category_name: serviceName});
            },
            getServicesByLaboratoryId: function (laboratoryId) {
                return _.where(services, {laboratory_id: laboratoryId});
            },

            /*
             * General Purpose
             */
            getDistinctItems: function (items, key) {
                return _.unique(items.map(function (item) {
                    return item[key];
                }));
            }
        };
    });
}(this.define));
