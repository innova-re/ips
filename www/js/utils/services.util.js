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
            getDistinctInstruments: function () {
                return _.unique(instruments.map(function (object) {
                    return object.instrument_category_name;
                }));
            },
            getDistinctInstrumentsByLaboratoryId: function (laboratoryId) {

                var  instrumentsByLaboratoryId = _.where(instruments, {laboratory_id: laboratoryId});

                return _.unique(instrumentsByLaboratoryId.map(function (object) {
                    return object.instrument_name;
                }));
            },
            getDistinctServices: function () {
                return _.unique(services.map(function (object) {
                    return object.service_category_name;
                }));
            },
            getDistinctServicesByLaboratoryId: function (laboratoryId) {

                var  servicesByLaboratoryId = _.where(services, {laboratory_id: laboratoryId});

                return _.unique(servicesByLaboratoryId.map(function (object) {
                    return object.service_name;
                }));
            },
            getInstrumentsByInstrumentName: function (instrumentName) {
                return _.where(instruments, {instrument_category_name: instrumentName});
            },
            getInstrumentsByLaboratoryId: function (laboratoryId) {
                return _.where(instruments, {laboratory_id: laboratoryId});
            },
            getLaboratories: function () {
                return laboratories;
            },
            getLaboratoryById: function (laboratoryId) {
                return _.where(laboratories, {
                    id: parseInt(laboratoryId, 10)
                })[0];
            },
            getLaboratoryByLaboratoryId: function (laboratoryId) {
                return _.where(laboratories, {id: laboratoryId})[0];
            },
            getLaboratoryByServiceId: function (serviceId) {
                return _.where(services, {service_id: serviceId})[0];
            },
            getMacroarea: function () {
                return macroarea;
            },
            getServices: function () {
                return services;
            },
            getServicesByServiceName: function (serviceName) {
                return _.where(services, {service_category_name: serviceName});
            },
            getServicesByLaboratoryId: function (laboratoryId) {
                return _.where(services, {laboratory_id: laboratoryId});
            }
        };
    });
}(this.define));