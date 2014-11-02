(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countriesCtrl',['appData', countriesCtrl]);

  function countriesCtrl(appData){

    var vm = this;

    vm.countries = appData.getCountries();

  }

}

)();