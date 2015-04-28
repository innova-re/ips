(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        return {
            getLaboratories: function () {
                return this;
            },
            getLaboratoryById: function (laboratoryId) {
                var result =  _.where(this, {
                    id: parseInt(laboratoryId, 10)
                })[0];
                // TODO - remove this when the data about lat and lng will be available.
                result.lat = 39.270376;
                result.lng = 9.124142;

                return result;
            }
        };
    });
}(this.define));
