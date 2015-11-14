angular.module('sharedcart', ['ionic','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('cart', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })
    .state('mygroups', {
      url: '/mygroup',
      templateUrl: 'templates/myGroups.html',
      controller: 'mygroupCtrl'
    })
    .state('group', {
      url: '/group',
      templateUrl: 'templates/group.html',
      controller: 'groupCtrl'
    }).
    state('view', {
      url: '/view',
      templateUrl: 'templates/view.html',
      controller: 'viewCtrl'
    });

  $urlRouterProvider.otherwise('/login');

});
