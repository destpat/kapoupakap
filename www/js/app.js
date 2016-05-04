// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


  .state('app.compte', {
      url: '/compte',
      views: {
        'menuContent': {
          templateUrl: 'templates/compte.html',
          controller: 'compteCtrl'
        }

  .state('app.accueil', {
    url: '/accueil',
    views: {
      'menuContent': {
        templateUrl: 'templates/accueil.html'
      }
    }
  })

  
  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })
 
  .state('app.defi', {
      url: '/defi',
      views: {
        'menuContent': {
          templateUrl: 'templates/defi.html',
          controller: 'defiCtrl'
        }
      }
    })
  .state('app.friend', {
      url: '/friend',
      views: {
        'menuContent': {
          templateUrl: 'templates/friend.html',
          controller: 'friendsController'
        }
      }
    })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'cameraCtrl'
        }
      }
    })

  .state('app.new', {
      url: '/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/new.html',
          controller: 'cameraCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/compte');
};
