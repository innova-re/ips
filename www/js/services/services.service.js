(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [
            {
                name: 'Aerospazio'
            },
            {
                name: 'Agrifood'
            },
            {
                name: 'Edilizia e Tecnologia per gli Ambienti di Vita'
            },
            {
                name: 'Energia e Ambiente'
            },
            {
                name: 'Scienze della vita'
            },
            {
                name: 'Smart Communities'
            }

        ];

        return {
            get: function () {
                return services;
            }
        };
    });
}(this.define));
