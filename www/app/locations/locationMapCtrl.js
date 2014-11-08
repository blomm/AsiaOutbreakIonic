(function(){
  'use strict';
  angular.module('asiaOutbreak').controller('locationMapCtrl',['$stateParams', locationMapCtrl]);

  function locationMapCtrl($stateParams){
    var vm = this;

    vm.locationId = Number($stateParams.id);

    vm.map={
      center:{
        lat: 45,
        lng: -73
      },
      zoom: 12
    };

    vm.marker={}

  };
})();
