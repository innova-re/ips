(function (define) {
    'use strict';

    define([
        'lodash'
    ], function (_) {
        // TODO - move into utils
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
