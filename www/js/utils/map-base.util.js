(function (define, plugin) {
    'use strict';

    define([
    ], function () {
        var MapBase;

        MapBase = function () {
            plugin.google.maps.BaseClass.apply(this);
        };

        if (plugin) {
            MapBase.prototype = new plugin.google.maps.BaseClass();
        }

        return MapBase;
    });
}(this.define, this.plugin));