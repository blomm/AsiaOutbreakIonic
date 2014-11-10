/**
 * Created with JetBrains WebStorm.
 * User: michaelblom
 * Date: 09/11/14
 * Time: 13:25
 *
 * based on: https://www.firebase.com/docs/web/libraries/angular/guide.html#section-angular-authentication
 **/

(function(angular){
  'use strict'

  angular.module('asiaOutbreak').controller('LoginCtrl', function($firebaseSimpleLogin) {

    var vm = this;
    vm.loginData = {};

    var dataRef = new Firebase("https://asiaoutbreak.firebaseio.com/");

    vm.loginObj = $firebaseSimpleLogin(dataRef);

    vm.tryLogin = function() {
      vm.loginObj.$login('password',vm.loginData).then(function(user) {
        // The root scope event will trigger and navigate
        console.log("Logged in as: ", user.uid);
      }, function(error) {
        // Show a form error here
        console.error('Unable to login', error);
      });
    };
  })



})(angular);