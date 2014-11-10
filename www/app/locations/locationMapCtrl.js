(function(){
  'use strict';
  angular.module('asiaOutbreak').controller('locationMapCtrl',['$stateParams', 'appData', locationMapCtrl]);

  function locationMapCtrl($stateParams, appData){
    var vm = this;

    var outbreak = appData.getOutbreak($stateParams.id);

    vm.map={
      center:{
        latitude: outbreak.Shape.coordinates[1],
        longitude: outbreak.Shape.coordinates[0]
      },
      zoom: 15
    };

    vm.marker={
      idKey: outbreak.idOriginal,
      coords: {
        latitude: outbreak.Shape.coordinates[1],
        longitude: outbreak.Shape.coordinates[0]
      }

    }

  };
})();
