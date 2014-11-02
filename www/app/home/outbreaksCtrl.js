( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('outbreaksCtrl',['appData','$state',outbreaksCtrl])

  function outbreaksCtrl(appData, $state){
    var vm = this;

    vm.outbreaks = appData.getOutbreaks();

    vm.selectOutbreak = function(idOriginal){
      //select correct outbreak
      $state.go("app.countries");
    }

  }
})();