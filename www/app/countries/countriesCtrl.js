(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countriesCtrl', ['appData', '$state', countriesCtrl]);

  function countriesCtrl(appData, $state){

    var vm = this;

    appData.getCountries().then(function(results){
      vm.countries = results.geonames;
    },function(failed){
      console.log("Failed to get countries "+ failed);
    });


    vm.selectCountry = function(geonameId){

      console.log(geonameId);

      $state.go('app.country-detail', {id:geonameId});

    }
  }
})();