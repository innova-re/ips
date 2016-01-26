(function (define) {
    'use strict';

    define([], function () {
        return function($translateProvider) {
            $translateProvider
            .translations('gb', {
                all: 'All',
                addFavorites: 'Add favorites',
                company: 'Corporation',
                search: 'Enter some keywords to find a list of results',
                button: {
                    search: 'Search',
                    showMap: 'Show map'
                },
                cluster: {
                    title: 'Laboratory Map',
                    text: 'Clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters).'
                },
                district: 'District',
                hone: 'Hone in on',
                map: {
                    whereIs: 'Where is?',
                    takeMeAround: 'Take me around'
                },
                back: 'Back',
                category: 'Category: ',
                categoryHelp: 'Click on a category to view the results.',
                description: 'Description',
                foundWords: 'Found words',
                getDirection: 'Get Direction',
                hours: 'Mon – Fri | 9am to 5pm',
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
                results: 'results for',
                title: 'Home'
            })
            .translations('it', {
                all: 'Tutto',
                addFavorites: 'Aggiungi ai preferiti',
                button: {
                    search: 'Cerca',
                    showMap: 'Mostra la mappa'
                },
                company: 'Ente',
                cluster: {
                    title: 'Mappa laboratori',
                    text: 'Visualizzazione dei laboratori su mappa volte alla selezione e raggruppamento di elementi omogenei.'
                },
                district: 'Provincia',
                hone: 'Affinare',
                map: {
                    whereIs: 'Dov\'è?',
                    takeMeAround: 'Portami'
                },
                back: 'Indietro',
                category: 'Categoria: ',
                categoryHelp: 'Clicca su una categoria per visualizzare i risultati di',
                description: 'Descrizione',
                foundWords: 'Parole trovate',
                getDirection: 'Calcola percorso',
                hours: 'Lun - Ven | 9:30 - 17:00',
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
                results: 'risultati per',
                search: 'Inserire delle parole chiave per visualizzare un elenco di risultati',
                services: 'Servizi',
                title: 'Home'
            });
            // TODO Detecting The Language Preference
            $translateProvider.preferredLanguage('it');
        }
    });
}(this.define));
