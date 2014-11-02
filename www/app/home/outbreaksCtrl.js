( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('outbreaksCtrl',['appData',outbreaksCtrl])

  function outbreaksCtrl(appData){
    var vm = this;

    vm.outbreaks = appData.getOutbreaks();

  }
})();