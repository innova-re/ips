(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        
        return {
            getDistinctServices: function () {
                return _.unique(this.map(function (object) {
                    return object.service_category_name;
                }));
            },
            getServicesByServiceName: function (serviceName) {
                return _.where(this, {service_category_name: serviceName});
            }
        };
    });
}(this.define));
