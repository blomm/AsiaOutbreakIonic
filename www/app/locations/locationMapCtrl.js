(function(){
  'use strict';
  angular.module('asiaOutbreak').controller('locationMapCtrl',['$stateParams', locationMapCtrl]);

  function locationMapCtrl($stateParams){
    var vm = this;

    vm.locationId = Number($stateParams.id);

    vm.map={
      center:{
        latitude: 45,
        longitude: -73
      },
      zoom: 12
    };

    vm.marker={}

  };
})();
