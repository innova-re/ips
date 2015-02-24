(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var laboratories = [
            {
                id: 0,
                name: 'Laboratorio informatico A. Turing',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 1,
                name: 'Laboratorio di cinema e multimedialità V. De Seta',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 2,
                name: 'Aula videoconferenza L. Geymonat',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 3,
                name: 'Aula multimediale',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 4,
                name: 'Mediateca',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 5,
                name: 'Laboratorio linguistico e di editing',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 6,
                name: 'Laboratorio di psicologia',
                lat: 39.228842,
                lng: 9.111931
            },
            {
                id: 7,
                name: 'Laboratorio LISS/A. Laboratorio ICT multimediale',
                lat: 39.223481,
                lng: 9.111309
            },
            {
                id: 8,
                name: 'Laboratorio LISS/B',
                lat: 39.223481,
                lng: 9.111309
            },
            {
                id: 9,
                name: 'Laboratorio LISS/C',
                lat: 39.223481,
                lng: 9.111309
            },
            {
                id: 10,
                name: 'Laboratorio multimediale LISS/D1',
                lat: 39.223481,
                lng: 9.111309
            },
            {
                id: 11,
                name: 'Laboratorio multimediale LISS/D2',
                lat: 39.223481,
                lng: 9.111309
            },
            {
                id: 12,
                name: 'Laboratorio Software',
                lat: 39.230142,
                lng: 9.108063
            },
            {
                id: 13,
                name: 'Laboratorio Multifunzionale',
                lat: 39.230142,
                lng: 9.108063
            },
            {
                id: 14,
                name: 'Laboratorio Grafica',
                lat: 39.230142,
                lng: 9.108063
            },
            {
                id: 15,
                name: 'Laboratorio Modelli',
                lat: 39.230142,
                lng: 9.108063
            },
            {
                id: 16,
                name: 'Laboratori didattici di Farmacia',
                lat: 39.222339,
                lng: 9.114032
            },
            {
                id: 17,
                name: 'Laboratori didattici di Medicina',
                lat: 39.222339,
                lng: 9.114032
            },
            {
                id: 18,
                name: 'Laboratori didattici di Scienze',
                lat: 39.222339,
                lng: 9.114032
            }
        ];

        return {
            get: function (id) {
                return laboratories[id] || {
                    id: 0,
                    name: 'Unknown laboratory',
                    lat: 39.228842,
                    lng: 9.111931
                };
            }
        };
    });
}(this.define));
