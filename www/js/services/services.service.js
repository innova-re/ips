(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                name: "Analisi Chimico-Fisiche",
                labs: [
                    {
                        id: 0,
                        serviceInfo: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali",
                        name: "Laboratorio di Materiali Nanofasici per l'Energia e l'Ambiente",
                        serviceDescription: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali mediante: diffrazione ai raggi x, tecniche calorimetriche, termogravimetriche, analisi delle superifici dei materiali, studio dell'interazione solido-gas, microscopia ottica, gas cromatografia, studio delle dimensioni di materiali nanoparticellari."
                    },
                    {
                        id: 0,
                        serviceInfo: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali",
                        name: "Laboratorio di Materiali Nanofasici per l'Energia e l'Ambiente",
                        serviceDescription: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali mediante: diffrazione ai raggi x, tecniche calorimetriche, termogravimetriche, analisi delle superifici dei materiali, studio dell'interazione solido-gas, microscopia ottica, gas cromatografia, studio delle dimensioni di materiali nanoparticellari."
                    },
                    {
                        id: 0,
                        serviceInfo: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali",
                        name: "Laboratorio di Materiali Nanofasici per l'Energia e l'Ambiente",
                        serviceDescription: "Caratterizzazione Chimico-Fisica di Diverse Classi di Materiali mediante: diffrazione ai raggi x, tecniche calorimetriche, termogravimetriche, analisi delle superifici dei materiali, studio dell'interazione solido-gas, microscopia ottica, gas cromatografia, studio delle dimensioni di materiali nanoparticellari."
                    }
                ]
            },
            {
                name: "Calcoli Strutturali"
            },
            {
                name: "Caratterizzazione Archeometrica"
            },
            {
                name: "Caratterizzazione Morfologica e Cristallografica"
            },
            {
                name: "Caratterizzazione Spettroscopica"
            },
            {
                name: "Energia Rinnovabile"
            },
            {
                name: "Fabbricazione Digitale"
            },
            {
                name: "Interpretazione di Dati Analitici - Analisi Statistica"
            },
            {
                name: "Metodiche di Biologia Molecolare"
            },
            {
                name: "Microelettronica e Dispositivi ElettroniciAvanzati"
            },
            {
                name: "Misure Elettriche ed Elettroniche"
            },
            {
                name: "Monitoraggio Ambientale"
            },
            {
                name: "Osservazioni Astronomiche"
            },
            {
                name: "Preparazione Campioni"
            },
            {
                name: "Prove sui materiali"
            },
            {
                name: "Sintesi e/o Purificazione di Molecole"
            },
            {
                name: "Sviluppo Materiali"
            }
        ];

        return {
            // If the serviceName is undefined then it returns services
            // If the serviceName is defined then it returns the labs array associated to the serviceName
            get: function (serviceName) {
                return serviceName ? services.filter(function (service) {
                    return service.name === serviceName;
                })[0].labs : services;
            }
        };
    });
}(this.define));
