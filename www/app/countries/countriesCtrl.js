(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countriesCtrl', ['appData', '$state', countriesCtrl]);

  function countriesCtrl(appData, $state){

    var vm = this;

    vm.countries = appData.getCountries();
    //console.log(vm.countries);

    vm.selectCountry = function(geonameId){

      console.log(geonameId);

      $state.go('app.country-detail', {id:geonameId});

    }
  }
})();