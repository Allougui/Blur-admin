(function() {
  'use strict';
  angular.module('BlurAdmin.pages.BuildingMap',[]).config(routeConfig);
  function routeConfig($stateProvider) {
    $stateProvider.state('BuildingMap', {
      url:'/BuildingMap',
      templateUrl: 'app/pages/BuildingMap/building-map.html',
      title:'Welcome to our localisation area',
      sidebarMeta: {
        icon: 'ion-ios-location-outline',
        order:500,
      },
    });

  }

})();
