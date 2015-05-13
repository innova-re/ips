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

                return result;
            }
        };
    });
}(this.define));
