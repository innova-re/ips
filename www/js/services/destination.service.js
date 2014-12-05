(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now ,some fake testing data.
        var destinations = [
            // TODO - Update the right values of lat and lng for each name
            {
                id: 0,
                name: 'Polo Umanistico',
                lat: 39.228842,
                lng: 9.111931
            }, {
                id: 1,
                name: 'Polo Scienze Sociali',
                lat: 39.228842,
                lng: 9.111931
            }, {
                id: 2,
                name: 'Polo Ingegneria e Architettura',
                lat: 39.228842,
                lng: 9.111931
            }, {
                id: 3,
                name: 'Polo Scientifico',
                lat: 39.228842,
                lng: 9.111931
            }
        ];

        return {
            all: function () {
                return destinations;
            },
            get: function (id) {
                // Simple index lookup
                return destinations[id];
            }
        };
    });
}(this.define));
