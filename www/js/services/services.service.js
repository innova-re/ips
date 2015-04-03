(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                "name":"Analisi Chimico-Fisiche"
            },
            {
                "name":"Calcoli Strutturali"
            },
            {
                "name":"Caratterizzazione Archeometrica"
            },
            {
                "name":"Caratterizzazione Morfologica e Cristallografica"
            },
            {
                "name":"Caratterizzazione Spettroscopica"
            },
            {
                "name":"Energia Rinnovabile"
            },
            {
                "name":"Fabbricazione Digitale"
            },
            {
                "name":"Interpretazione di Dati Analitici - Analisi Statistica"
            },
            {
                "name":"Metodiche di Biologia Molecolare"
            },
            {
                "name":"Microelettronica e Dispositivi ElettroniciAvanzati"
            },
            {
                "name":"Misure Elettriche ed Elettroniche"
            },
            {
                "name":"Monitoraggio Ambientale"
            },
            {
                "name":"Osservazioni Astronomiche"
            },
            {
                "name":"Preparazione Campioni"
            },
            {
                "name":"Prove sui materiali"
            },
            {
                "name":"Sintesi e/o Purificazione di Molecole"
            },
            {
                "name":"Sviluppo Materiali"
            }
        ];

        return {
            get: function () {
                return services;
            }
        }
    });
}(this.define));
