(function (define) {
    'use strict';

    define([
        'lodash',
        'json!../../json/laboratories.json',
        'json!../../json/services.json',
        'json!../../json/instruments.json',
        'json!../../json/macroarea.json',
        'json!../../json/menu-items.json'
    ], function (_, laboratories, services, instruments, macroarea, menuItems) {
        
        return {

            get: function (key, category, uniq) {

                var source,
                    items,
                    mapKey;

                mapKey = {
                    services: services,
                    instruments: instruments,
                    laboratories: laboratories
                };
                source = (category === '') ? {} : {category: category};
                items = _.where(mapKey[key], source);

                return uniq ? _.uniq(items, 'id') : items;
            },

            /*
             * Instruments Methods
             */
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
            getLaboratoryByLaboratoryId: function (laboratoryId) {
                return _.where(laboratories, {
                    id: parseInt(laboratoryId, 10)
                })[0];
            },
            getLaboratoriesByItems: function (items) {

                var ids,
                    allLaboratories;

                ids = _.unique(items.map(function (item) {
                    return item.laboratory_id;
                }));

                allLaboratories = ids.map(function (laboratoryId) {
                    return _.where(laboratories, {
                        id: parseInt(laboratoryId, 10)
                    })[0];
                });

                return _.remove(allLaboratories, function(laboratory) {
                    return laboratory !== undefined;
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
            },

            getMenu: function () {
                return menuItems;
            }
        };
    });
}(this.define));
