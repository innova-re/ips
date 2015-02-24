(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var poli = [
            {
                id: 0,
                name: 'Polo Umanistico',
                laboratories: [
                    {
                        id: 0,
                        name: 'Laboratorio informatico A. Turing'
                    },
                    {
                        id: 1,
                        name: 'Laboratorio di cinema e multimedialità V. De Seta'
                    },
                    {
                        id: 2,
                        name: 'Aula videoconferenza L. Geymonat'
                    },
                    {
                        id: 3,
                        name: 'Aula multimediale'
                    },
                    {
                        id: 4,
                        name: 'Mediateca'
                    },
                    {
                        id: 5,
                        name: 'Laboratorio linguistico e di editing'
                    },
                    {
                        id: 6,
                        name: 'Laboratorio di psicologia'
                    }
                ]
            },
            {
                id: 1,
                name: 'Polo Scienze Sociali',
                laboratories: [
                    {
                        id: 7,
                        name: 'Laboratorio LISS/A. Laboratorio ICT multimediale'
                    },
                    {
                        id: 8,
                        name: 'Laboratorio LISS/B'
                    },
                    {
                        id: 9,
                        name: 'Laboratorio LISS/C'
                    },
                    {
                        id: 10,
                        name: 'Laboratorio multimediale LISS/D1'
                    },
                    {
                        id: 11,
                        name: 'Laboratorio multimediale LISS/D2'
                    }

                ]
            },
            {
                id: 2,
                name: 'Polo Ingegneria e Architettura',
                laboratories: [
                    {
                        id: 12,
                        name: 'Laboratorio Software'
                    },
                    {
                        id: 13,
                        name: 'Laboratorio Multifunzionale'
                    },
                    {
                        id: 14,
                        name: 'Laboratorio Grafica'
                    },
                    {
                        id: 15,
                        name: 'Laboratorio Modelli'
                    }
                ]
            },
            {
                id: 3,
                name: 'Polo Scientifico',
                laboratories: [
                    {
                        id: 16,
                        name: 'Laboratori didattici di Farmacia'
                    },
                    {
                        id: 17,
                        name: 'Laboratori didattici di Medicina'
                    },
                    {
                        id: 18,
                        name: 'Laboratori didattici di Scienze'
                    }
                ]
            }
        ];

        return {
            all: function () {
                return poli;
            },
            get: function (id) {
                // Simple index lookup
                return poli[id];
            },
            getLabs: function (id) {
                if(typeof poli[id] !== 'undefined') {
                    return poli[id].laboratories;
                }
                return [];
            }

        };
    });
}(this.define));
