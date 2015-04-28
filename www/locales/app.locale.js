(function (define) {
    'use strict';

    define([], function () {
        return function($translateProvider) {
            $translateProvider
            .translations('en', {
                back: 'Back',
                getDirection: 'Get Direction',
                title: 'Innovare Navigation',
                services: 'Services',
                category: 'Category: ',
                services_text: 'The services offered by the laboratories are available and accessible through online form',
                services_search: 'Enter some letters to see a list of services',
                labs: 'Laboratories',
                labs_text: 'List of laboratories of the regional network RLAB Sardinia',
                labs_search: 'Enter some letters to see a list of laboratories',
                instruments: 'Instruments',
                instruments_text: 'The catalog of the instruments is a service of quick consultation aimed at researchers and companies interested in learning about the supply of equipment related to testing and analysis of the RLAB Sardinia laboratories.',
                instruments_search: 'Enter some letters to see a list of instruments'
            })
            .translations('it', {
                back: 'Indietro',
                getDirection: 'Calcola percorso',
                title: 'Navigazione Innovare',
                services: 'Servizi',
                category: 'Categoria: ',
                services_text: 'I servizi offerti dai laboratori sono consultabili e accessibili mediante richiesta on-line',
                services_search: 'Inserire delle lettere per visualizzare un elenco di servizi',
                labs: 'Laboratori',
                labs_text: 'Elenco dei laboratori della rete regionale RLAB Sardegna.',
                labs_search: 'Inserire delle lettere per visualizzare un elenco di laboratori',
                instruments: 'Strumenti',
                instruments_text: 'Il catalogo degli strumenti è un servizio di rapida consultazione rivolto ai ricercatori e alle imprese interessati a conoscere l’offerta di apparecchiature legate a sperimentazione e analisi dei laboratori di RLAB Sardegna.',
                instruments_search: 'Inserire delle lettere per visualizzare un elenco di strumenti'
            });
            $translateProvider.preferredLanguage('en');
        }
    });
}(this.define));
