(function (define) {
    'use strict';

    define([], function () {
        return function($translateProvider) {
            $translateProvider
            .translations('gb', {
                search: 'Enter some keywords to find a list of results',
                button: {
                    search: 'Search',
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
                back: 'Back',
                category: 'Category: ',
                description: 'Description',
                foundWords: 'Found words',
                getDirection: 'Get Direction',
                instrument: {
                    category:'Instrument category',
                    name: 'Instruments',
                    search: 'Enter some keywords to find a list of results'
                },
                keywords: 'Keywords',
                labs_text: 'List of laboratories of the regional network RLAB Sardinia',
                laboratory: {
                    name: 'Laboratories',
                    search: 'Enter some keywords to find a list of results'
                },
                service: {
                    name: 'Services',
                    category:'Service category name',
                    search: 'Enter some keywords to find a list of results'
                },
                services: 'Services',
                instruments: 'Instruments',
                laboratories: 'Laboratories',
                results: 'Results',
                title: 'Home'
            })
            .translations('it', {
                button: {
                    search: 'Cerca',
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
                back: 'Indietro',
                category: 'Categoria: ',
                description: 'Descrizione',
                foundWords: 'Parole trovate',
                getDirection: 'Calcola percorso',
                instruments: 'Strumenti',
                laboratories: 'Laboratori',
                keywords: 'Parole chiave',
                labs_text: 'Elenco dei laboratori della rete regionale RLAB Sardegna.',
                service: {
                    name: 'Servizi',
                    category:'Categoria servizio',
                    search: 'Inserire delle parole chiave per visualizzare un elenco di risultati'
                },
                instrument: {
                    category:'Categoria strumento',
                    name: 'Strumenti',
                    search: 'Inserire delle parole chiave per visualizzare un elenco di risultati'
                },
                laboratory: {
                    name: 'Laboratori',
                    search: 'Inserire delle parole chiave per visualizzare un elenco di risultati'
                },
                results: 'Risultati',
                search: 'Inserire delle parole chiave per visualizzare un elenco di risultati',
                services: 'Servizi',
                title: 'Home'
            });
            // TODO Detecting The Language Preference
            $translateProvider.preferredLanguage('it');
        }
    });
}(this.define));
