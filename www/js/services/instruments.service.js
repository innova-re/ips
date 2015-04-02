(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var instruments = [
            {
                name: 'Analizzatori'
            },
            {
                name: 'Convertitori, macchine ad azionamenti elettrici'
            },
            {
                name: 'Cromatografi'
            },
            {
                name: 'Microscopi'
            },
            {
                name: 'Misuratori di grandezze fisiche'
            },
            {
                name: 'Misuratori elettrochimici'
            },
            {
                name: 'Rivelatori'
            },
            {
                name: 'Sistemi a condizioni controllate'
            }
        ];

        return {
            get: function ($stateParams) {
                return instruments;
            }
        }
    });
}(this.define));
