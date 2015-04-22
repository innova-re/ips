(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        
        return {
            getDistinctServices: function () {
                return _.unique(this.map(function (object) {
                    return object.name;
                }));
            },
            getServicesByServiceName: function (serviceName) {
                return _.where(this, {name: serviceName});
            }
        };
    });
}(this.define));
