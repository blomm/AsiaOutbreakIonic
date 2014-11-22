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

  angular.module('asiaOutbreak').controller('LoginCtrl', [loginCtrl])

  function loginCtrl() {

    var vm = this;

    var dataRef = new Firebase('https://asiaoutbreak.firebaseio.com/');

    vm.tryLogin=function(){

      // Log me in
      dataRef.authWithPassword(vm.loginData, function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          console.log('Authenticated successfully with payload:', authData);
        }
      });
    }


    /*vm.tryLogin = function() {
      userPrincipalService.loginObject.$login('password',vm.loginData).then(function(user) {
        // The root scope event will trigger and navigate
        // Success will fire $firebaseSimpleLogin:login
        console.log("Logged in as: ", user.uid);
      }, function(error) {
        // Show a form error here
        console.error('Unable to login', error);
      });
    };*/
  };

})(angular);