( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('locationsCtrl',['appData',locationsCtrl])

  function locationsCtrl(appData){
   var vm = this;

    //console.log(appData.getOutbreaks());
    //vm.locations=appData.getLocations();
    vm.outbreaks = appData.getOutbreaks();

  }
}

  )();