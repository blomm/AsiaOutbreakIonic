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
    .state('login', {
      url: "/login",
      templateUrl: "app/login/login.html",
      controller: 'LoginCtrl'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'app/login/signup.html',
      controller: 'SignupCtrl'
    })
    .state('app',{
      abstract:true,
      url:"/app",
      templateUrl:"app/layout/menu-layout.html"
    })
    .state('app.countries',{
      url:"/countries",
      views:{
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


  .run(function($rootScope, $firebaseSimpleLogin, $state, $window) {

    /*var dataRef = new Firebase("https://ionic-firebase-login.firebaseio.com/");
    var loginObj = $firebaseSimpleLogin(dataRef);

    loginObj.$getCurrentUser().then(function(user) {
      if(!user){
        // Might already be handled by logout event below
        $state.go('login');
      }
    }, function(err) {
    });*/

    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      $state.go('app.countries');
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function(e, user) {
      console.log($state);
      $state.go('login');
    });
  })