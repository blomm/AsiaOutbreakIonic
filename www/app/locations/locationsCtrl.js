( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('locationsCtrl',['appData',locationsCtrl])

  function locationsCtrl(appData){
   var vm = this;

   vm.outbreaks = _.sortBy(appData.getOutbreaks(),'startDate');

  }
}

  )();