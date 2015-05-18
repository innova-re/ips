(function (define, location) {
    'use strict';

    define([
        '../utils/services.util',
        'json!../../json/services.json'
    ], function (servicesUtil, servicesJson) {

        return ['$ionicPopup', function ($ionicPopup) {

            var showPopup;

            showPopup = function (serviceId, entity) {

                var item,
                    popup;

                item = servicesUtil.getLaboratoryByServiceId.call(servicesJson, serviceId);
                popup = $ionicPopup.show({
                    title: item[entity + '_name'],
                    template: item[entity + '_description'],
                    buttons: [
                        { 
                            text: 'Cancel' 
                        },
                        {
                            text: '<a>Vai</a>',
                            type: 'button-positive',
                            onTap: function (event) {
                                event.preventDefault();
                                popup.close();
                                location.href = '#/tab/map/' + item.laboratory_id;
                            }
                        }
                    ]
                });
            };

            return {
                showPopup: showPopup,
                servicesJson: servicesJson
            };
        }];
    });
}(this.define, this.location));
