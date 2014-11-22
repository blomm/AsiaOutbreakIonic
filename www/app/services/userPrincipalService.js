/**
 * User: michaelblom
 * Date: 15/11/14
 * Time: 11:46
 * To change this template use File | Settings | File Templates.
 */

(function(angular){
  'use strict';

  angular.module('asiaOutbreak').factory('userPrincipalService', ['$firebaseSimpleLogin', userPrincipalService])

  function userPrincipalService($firebaseSimpleLogin){

    var firebaseRef = new Firebase("https://asiaoutbreak.firebaseio.com/");

    return{
      loginObject:$firebaseSimpleLogin(firebaseRef)
    };
  }

})(angular);
