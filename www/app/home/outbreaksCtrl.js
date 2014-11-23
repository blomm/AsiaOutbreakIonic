( function(){
  'use strict'
  angular.module('asiaOutbreak').controller('outbreaksCtrl',['appData',outbreaksCtrl])

  function outbreaksCtrl(appData){

    var vm = this;

    vm.outbreaks=appData.getOutbreaks();

    /*appData.getOutbreaks().then(function(data){
      vm.outbreaks = data;
    });*/

    /*vm.selectOutbreak = function(idOriginal){
      //select correct outbreak
      $state.go("app.countries");
    }*/


  }
})();