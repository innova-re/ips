(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                id: 0,
                name: 'Analisi Chimico-Fisiche'
            },
            {
                id: 1,
                name: 'Calcoli Strutturali'
            },
            {
                id: 2,
                name: 'Caratterizzazione Morfologica e Cristallografica'
            },
            {
                id: 3,
                name: 'Caratterizzazione Spettroscopica'
            }
        ];

        return {
            get: function () {
                return services;
            }
        };
    });
}(this.define));
