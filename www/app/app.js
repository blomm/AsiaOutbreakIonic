angular.module('asiaOutbreak',["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

    .state('home',{
      abstract: true,
      url:"/home",
      templateUrl:"app/home/home.html"
    })
    .state('home.outbreaks',{
      url: "/outbreaks",
      views:{
        "tab-outbreaks":{
          templateUrl:"app/home/outbreaks.html"
        }
      }
    })
    .state('home.info',{
      url:'/info',
      views:{
        "tab-info":{
          templateUrl:"app/home/info.html"
        }
      }
    })
    .state('app',{
      url:"/app",
      templateUrl:"app/layout/menu-layout.html"
    });

    //this is the fallback url if none of the above matches
    $urlRouterProvider.otherwise('/home/outbreaks');

 })
