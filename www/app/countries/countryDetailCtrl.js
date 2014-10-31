(function(){
  'use strict';

  angular.module('asiaOutbreak').controller('countryDetailCtrl',['$stateParams', countryDetailCtrl]);

  function countryDetailCtrl($stateParams){
    var vm = this;
    console.log("$stateParams", $stateParams);
  };
})();