(function(){
  'use strict'

  angular.module('asiaOutbreak').controller('specieOutbreakDetailCtrl', ['appData', '$stateParams', specieOutbreakDetailCtrl])

  function specieOutbreakDetailCtrl(appData, $stateParams){

    var vm = this

    vm.specie=$stateParams.name;

    vm.outbreaks= appData.getOutbreaks();

    //var outbreaksBySpecie1Unsorted = _.filter(vm.outbreaks, {"specie1":vm.specie})


    //vm.outbreaksBySpecie = _.sortBy(outbreaksBySpecie1Unsorted, 'startdate');

    vm.outbreaksBySpecie = _.chain(vm.outbreaks)
                            .filter({"specie1":vm.specie})
                            .sortBy('startdate')
                            .value()

  }

})();