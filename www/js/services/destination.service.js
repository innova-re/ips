(function (define) {
    'use strict';

    define([
        'text!../../img/planimetry.svg'
    ], function (svgObject) {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var destinations = [
            {
                id: 0,
                name: 'Polo Umanistico',
                lat: 39.228842,
                lng: 9.111931,
                src: 'img/planimetry.svg'
            }, {
                id: 1,
                name: 'Polo Scienze Sociali',
                lat: 39.223481,
                lng: 9.111309,
                src: 'img/planimetry.svg'
            }, {
                id: 2,
                name: 'Polo Ingegneria e Architettura',
                lat: 39.230142,
                lng: 9.108063,
                src: 'img/planimetry.svg'
            }, {
                id: 3,
                name: 'Polo Scientifico',
                lat: 39.222339,
                lng: 9.114032,
                src: 'img/planimetry.svg'
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
