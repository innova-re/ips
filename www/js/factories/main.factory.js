(function (define) {
    'use strict';

    define([
        './data-service.factory',
        './modal.factory',
        './search.factory'
    ], function (dataService, modalFactory, searchFactory) {

        return function (app) {

            app.factory('searchFactory', searchFactory)
                .factory('modalFactory', modalFactory)
                .factory('dataService', dataService);
        };
    });
}(window.define));
