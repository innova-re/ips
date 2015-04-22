(function (define) {
    'use strict';

    define([], function () {
        // Might use a resource here that returns a JSON array. For now, some fake testing data.
        return {
            getDistinctInstruments: function () {
                return _.unique(this.map(function (object) {
                    return object.name;
                }));
            },
            getInstrumentsByInstrumentName: function (instrumentName) {
                return _.where(this, {name: instrumentName});
            }
        }
    });
}(this.define));
