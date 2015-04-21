(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        var services = [ { name: 'Analisi Chimico-Fisiche',
    service_name: 'Caratterizzazione di terre, minerali, rocce',
    service_description: 'Stima del contenuto in sostanza organica per termogravimetria o LOI (Loss of Weight on Ignition).',
    laboratory_name: 'Laboratorio Preparazione Minerali',
    laboratory_id: 69 },
  { name: 'Analisi Chimico-Fisiche',
    service_name: 'Analisi',
    service_description: 'Esecuzione di misure di analisi termica differenziale e termo gravimetrica (in simultanea)',
    laboratory_name: 'Laboratorio Mulini',
    laboratory_id: 74 },
  { name: 'Analisi Chimico-Fisiche',
    service_name: 'Analitica per risolvere problemi',
    service_description: 'Analitica per risolvere problemi',
    laboratory_name: 'Laboratorio Analitica delle Superfici',
    laboratory_id: 75 },
  { name: 'Analisi Chimico-Fisiche',
    service_name: 'Caratterizzazione dei materiali',
    service_description: 'Determinazione della composizione  elementare di un campione',
    laboratory_name: 'Laboratorio di Diffrattometria Raggi X - Materiali',
    laboratory_id: 72 },
  { name: 'Diff Analisi Chimico-Fisiche',
    service_name: 'Misure di densità',
    service_description: 'Misure di densità su campioni liquidi',
    laboratory_name: 'Laboratorio Fluidi Supercritici',
    laboratory_id: 64 } ];
        return {
            getDistinctServices: function () {
                return _.unique(services.map(function (object) {
                    return object.name;
                }));
            },
            getServicesByServiceName: function (serviceName) {
                return _.where(services, {name: serviceName});
            }
        };
    });
}(this.define));
