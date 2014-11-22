angular.module('asiaOutbreak',["ionic", "firebase", "uiGmapgoogle-maps"])

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

    .state('login', {
      url: "/login",
      templateUrl: "app/login/login.html",
      controller: 'LoginCtrl'
    })
    //the states the are abstract will have resolves set on them, this
    .state('home',{
      abstract: true,
      url:"/home",
      templateUrl:"app/home/home.html",
      resolve:{
        authorize: 'authorizationService'}
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
      abstract:true,
      url:"/app",
      templateUrl:"app/layout/menu-layout.html",
      resolve:{
        authorize: 'authorizationService'}
    })
    .state('app.countries',{
      url:"/countries",
      views:{
        //this will be inserted into the ion-nav-view of the parent state template (app state's menu-layout.html) with the name mainContent
        'mainContent':{
          templateUrl:"app/countries/countries.html"
        }
      }
    })
    .state('app.country-detail',{
      url:"/countries/:id",
      views:{
        'mainContent':{
          templateUrl:"app/countries/country-detail.html"
        }
      }
    })
    .state('app.regions',{
      url:"/regions",
      views:{
        'mainContent':{
          templateUrl:"app/regions/regions.html"
        }
      }
    })
    .state('app.locations',{
      url:"/locations",
      views:{
        'mainContent':{
          templateUrl:"app/locations/locations.html"
        }
      }
    })
    .state('app.location-map',{
      url:"/location-map/:id",
      views:{
        'mainContent':{
          templateUrl:"app/locations/locationMap.html"
        }
      }
    })
    .state('app.diseases',{
      url:"/diseases",
      views:{
        'mainContent':{
          templateUrl:"app/diseases/diseases.html"
        }
      }
    })
    .state('app.species',{
      url:"/species",
      views:{
        'mainContent':{
          templateUrl:"app/species/species.html"
        }
      }
    })
    .state('app.species-outbreak-detail',{
      url:"/species/:name",
      views:{
        'mainContent':{
          templateUrl:"app/species/specieOutbreakDetail.html"
        }
      }
    })
    .state('app.models',{
      url:"/models",
      views:{
        'mainContent':{
          templateUrl:"app/models/models.html"
        }
      }
    })

    //this is the fallback url if none of the above matches
    $urlRouterProvider.otherwise('/login');

 })


  .run(function($rootScope, $state, authorizationService) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {

      //if we are already going to the login, no need to say it again!
      if (toState.name != 'login' && !authorizationService.isAuthenticated()) {
        $state.go('login');
      };
    });

    $rootScope.logout = function(){
      authorizationService.logout();
      //userPrincipalService.loginObject.$logout();
    }

    /*$rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      $state.go('home.outbreaks');
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function(e, user) {
      console.log($state);
      $state.go('login');
    });*/
  })