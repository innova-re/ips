(function (define) {
    'use strict';

    define([
        'lodash',
        'geolib',
        'json!../../json/laboratories.json',
        'json!../../json/services.json',
        'json!../../json/instruments.json',
        'json!../../json/macroarea.json',
        'json!../../json/menu-items.json'
    ], function (_, geolib, laboratories, services, instruments, macroarea, menuItems) {

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

                var instrumentsByLaboratoryId = _.where(instruments, {laboratory_id: laboratoryId});

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

            /*
             * This method returns the laboratories
             * which id is listed into instruments or services
             */
            // TODO - you should split this into two function:
            // 1. getIds (you get an array of ids from any array of objects)
            // 2. getLaboratoryByLaboratoryIds which returns an array of labs
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

                return _.remove(allLaboratories, function (laboratory) {
                    return laboratory !== undefined;
                });
            },

            /*
             * It returns the laboratories filtered by the valuesToMatch object ('provincia' and 'ente')
             */
            getLaboratoriesByKeys: function (stateParameters) {

                var valuesToMatch = {};
                var provinciaName = stateParameters.provinciaName;
                var enteName = stateParameters.enteName;

                if (provinciaName !== undefined && provinciaName !== '') {
                    valuesToMatch.provincia_name = provinciaName;
                }
                if (enteName !== undefined && enteName !== '') {
                    valuesToMatch.ente_name = enteName;
                }

                return _.where(laboratories, valuesToMatch);
            },

            /*
             * Macroarea Methods
             */
            getMacroarea: function () {
                return macroarea;
            },

            getMacroareaNames: function () {

                return _.unique(macroarea.map(function (object) {
                    return object.macroarea_name;
                }));
            },

            /*
             * Services Methods
             */
            getDistinctServicesByLaboratoryId: function (laboratoryId) {

                var servicesByLaboratoryId = _.where(services, {laboratory_id: laboratoryId});

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
            },

            setCoords: function (items) {

                _.map(items, function (item) {

                    var coords = _.where(macroarea, {id: item.laboratory_id})[0];

                    item.lat = coords.lat;
                    item.lng = coords.lng;
                });
            },

            setDistance: function (laboratories, coords) {

                var distance;

                _.map(laboratories, function (laboratory) {
                    // TODO - in order to avoid to compute the distance different time for the same laboratory
                    // you should use the _.memoize function
                    distance = geolib.getPathLength([
                        {latitude: laboratory.lat, longitude: laboratory.lng},
                        {latitude: coords.lat, longitude: coords.lng}
                    ]);
                    laboratory.distance = geolib.convertUnit('km', distance, 2);
                });
            }
        };
    });
}(this.define));
