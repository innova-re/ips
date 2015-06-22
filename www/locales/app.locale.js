(function (define) {
    'use strict';

    define([], function () {
        return function($translateProvider) {
            $translateProvider
            .translations('en', {
                button: {
                    search: 'Search',
                    hideMap: 'Hide map',
                    showMap: 'Show map'
                },
                cluster: {
                    title: 'Laboratory Map',
                    text: 'Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters).'
                },
                hone: 'Hone in on',
                map: {
                    whereIs: 'Where is?',
                    takeMeAround: 'Take me around'
                },
                search: 'Enter some keywords to find a list of {{ items }}',
                back: 'Back',
                category: 'Category: ',
                description: 'Description',
                getDirection: 'Get Direction',
                instrument: {
                    category:'Instrument category',
                    name: 'Instruments'
                },
                keywords: 'Keywords',
                labs_text: 'List of laboratories of the regional network RLAB Sardinia',
                laboratories: 'Laboratories',
                service: {
                    name: 'Services',
                    category:'Service category name'
                },
                services: 'Services',
                instruments: 'Instruments',
                results: 'Results',
                title: 'Home'
            })
            .translations('it', {
                button: {
                    search: 'Cerca',
                    hideMap: 'Nascondi la mappa',
                    showMap: 'Mostra la mappa'
                },
                cluster: {
                    title: 'Mappa laboratori',
                    text: 'Visualizzazione dei laboratori su mappa volte alla selezione e raggruppamento di elementi omogenei.'
                },
                hone: 'Affinare',
                map: {
                    whereIs: 'Dov\'è?',
                    takeMeAround: 'Portami'
                },
                search: 'Inserire delle parole chiave per visualizzare un elenco di {{ items }}',
                back: 'Indietro',
                category: 'Categoria: ',
                description: 'Descrizione',
                getDirection: 'Calcola percorso',
                instruments: 'Strumenti',
                keywords: 'Parole chiave',
                labs_text: 'Elenco dei laboratori della rete regionale RLAB Sardegna.',
                service: {
                    name: 'Servizi',
                    category:'Categoria servizio'
                },
                instrument: {
                    category:'Categoria strumento',
                    name: 'Strumenti'
                },
                laboratories: 'Laboratori',
                results: 'Risultati',
                services: 'Servizi',
                title: 'Home'
            });
            $translateProvider.preferredLanguage('en');
        }
    });
}(this.define));
