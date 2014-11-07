(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countryDetailCtrl',['$stateParams', 'appData', countryDetailCtrl]);

  function countryDetailCtrl($stateParams, appData){

    var vm = this;


    vm.geonameId = Number($stateParams.id);

    //console.log(vm.geonameId);

    var countries = appData.getCountries();
    var outbreaks = appData.getOutbreaks();

    vm.country = _.find(countries, {"geonameId":vm.geonameId})


    vm.outbreaks = _.filter(outbreaks, {"country":vm.country.name})

    //console.log("country name: " + vm.country.name);
    console.log(vm.outbreaks);


  };
})();