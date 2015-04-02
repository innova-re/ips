(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                name: 'Analisi Chimico-Fisiche'
            },
            {
                name: 'Calcoli Strutturali'
            },
            {
                name: 'Caratterizzazione Archeometrica'
            },
            {
                name: 'Caratterizzazione Morfologica e Cristallografica'
            },
            {
                name: 'Caratterizzazione Spettroscopica'
            },
            {
                name: 'Energia Rinnovabile'
            },
            {
                name: 'Fabbricazione Digitale'
            },
            {
                name: 'Interpretazione di Dati Analitici - Analisi Statistica'
            }
        ];

        return {
            get: function ($stateParams) {
                if ($stateParams && $stateParams.name) {
                    for(let index in services) {
                        if (services[index].name === $stateParams.name) {
                            return services[index].categories;
                        }
                    } 
                }
                
                return services;
            }
        }
    });
}(this.define));
