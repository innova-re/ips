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
            },
            {
                id: 4,
                name: 'Energia Rinnovabile'
            },
            {
                id: 5,
                name: 'Fabbricazione Digitale'
            },
            {
                id: 6,
                name: 'Interpretazione di Dati Analitici - Analisi Statistica'
            },
            {
                id: 7,
                name: 'Metodiche di Biologia Molecolare'
            },
            {
                id: 8,
                name: 'Microelettronica e Dispositivi ElettroniciAvanzati'
            },
            {
                id: 9,
                name: 'Misure Elettriche ed Elettroniche'
            },
            {
                id: 10,
                name: 'Monitoraggio Ambientale'
            },
            {
                id: 11,
                name: 'Osservazioni Astronomiche'
            },
            {
                id: 12,
                name: 'Preparazione Campioni'
            },
            {
                id: 13,
                name: 'Sintesi e/o Purificazione di Molecole'
            },
            {
                id: 14,
                name: 'Sviluppo Materiali'
            },
            {
                id: 15,
                name: 'Allestimento di Colture Cellulari e Animali'
            },
            {
                id: 16,
                name: 'Analisi Acque'
            },
            {
                id: 17,
                name: 'Analisi Biomeccaniche ed Ergonomiche'
            }
        ];

        return {
            get: function () {
                return services;
            }
        };
    });
}(this.define));
