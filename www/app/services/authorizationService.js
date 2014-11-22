/**
 * User: michaelblom
 * Date: 14/11/14
 * Time: 21:37
 */

( function(angular){
  'use strict';

  angular.module('asiaOutbreak').factory('authorizationService', ['$state',authorizationService]);

  function authorizationService($state){

    //var autheticated=false;

    var dataRef = new Firebase('https://asiaoutbreak.firebaseio.com/');

    //var authData = dataRef.getAuth();

    /*if (authData) {
      console.log('Authenticated user with uid:', authData.uid);
    }*/

    /*var authRef = new Firebase("https://asiaoutbreak.firebaseio.com/.info/authenticated");

    //var deferred = $q.defer();

    authRef.on("value", function(snap) {
      //deferred.resolve();
      if (snap.val() === true) {
        autheticated=true;
      } else {
        autheticated=false;
      }
    });*/

    dataRef.onAuth(function(authData) {
      if (authData) {
        $state.go('home.outbreaks');
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
      } else {

      }
    });

    function isAuthenticated(){
      var authData = dataRef.getAuth();
      if (authData) {
        return true
      }
      else return false;
    }

    function logout(){
      dataRef.unauth();
      $state.go('login');
    }

    return {
      isAuthenticated: isAuthenticated,
      logout:logout
    };
  }
})(angular);