/**
 * User: michaelblom
 * Date: 22/11/14
 * Time: 17:02
 * To change this template use File | Settings | File Templates.
 */

(function(angular){
  'use strict'

  angular.module('asiaOutbreak').controller('newReportCtrl',['appData', newReportCtrl]);

  function newReportCtrl(appData){

    var vm = this;

    vm.updateCountry=function(){
      vm.provinces=null;
      vm.districts=null;
      vm.communes=null;
      appData.getGeoNameChild(vm.countryName.geonameId).then(function(adm1Data){
        vm.provinces = adm1Data.geonames;
      },function(error){
        console.log("Failed to retrieve the country adm 1 (Province) data "+ error);
      });
    };

    vm.updateProvince=function(){
      vm.districts=null;
      vm.communes=null;
      appData.getGeoNameChild(vm.provinceName.geonameId).then(function(adm2Data){
        vm.districts = adm2Data.geonames;
      },function(error){
        console.log("Failed to retrieve the country adm 2 (District) data "+ error);
      });
    }

    vm.updateDistrict=function(){
      vm.communes=null;
      appData.getGeoNameChild(vm.districtName.geonameId).then(function(adm3Data){
        vm.communes = adm3Data.geonames;
      },function(error){
        console.log("Failed to retrieve country adm 3 (Commune) data " + error);
      })
    }

    appData.getCountries().then(function(countryResults){
      vm.countries=countryResults.geonames;
    },function(error){
      console.log("Failed to retrieve countries " + error);
    });

  }

})(angular);