( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('locationsCtrl',['appData',locationsCtrl])

  function locationsCtrl(appData){
   var vm = this;

    //console.log(appData.getOutbreaks());
    vm.outbreaks=appData.getOutbreaks();

  }
}

  )();