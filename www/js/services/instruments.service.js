(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        return {
            getDistinctInstruments: function () {
                return _.unique(this.map(function (object) {
                    return object.instrument_category_name;
                }));
            },
            getInstrumentsByInstrumentName: function (instrumentName) {
                return _.where(this, {instrument_category_name: instrumentName});
            }
        }
    });
}(this.define));
