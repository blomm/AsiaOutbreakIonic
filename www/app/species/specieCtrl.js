(function(){
  'use strict'

  angular.module('asiaOutbreak').controller('specieCtrl',['appData', specieCtrl]);

  function specieCtrl(appData){

    var vm = this;

    vm.outbreaks = appData.getOutbreaks();

    vm.outbreaksBySpecie1s = _.uniq(vm.outbreaks, 'specie1');



  }
})();