(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countryDetailCtrl',['$stateParams', 'appData', countryDetailCtrl]);

  function countryDetailCtrl($stateParams, appData){

    var vm = this;

    var outbreaks = appData.getOutbreaks();

    vm.geonameId = Number($stateParams.id);

    //we need to first get the countries,
    //then find the one country we are interested in,
    //then filter outbreaks by country
    appData.getCountries().then(function(countriesResults){
      vm.countries = countriesResults.geonames;
      vm.country = _.find(vm.countries, {"geonameId":vm.geonameId});
      outbreaks.$loaded().then(function(outbreakData){
        vm.outbreaks = _.filter(outbreaks, {"country":vm.country.name})
      })
    },function(error){
      console.log("Failed to get country info " + error);
    });

    //console.log("country name: " + vm.country.name);
    //console.log(vm.outbreaks);

  };
})();