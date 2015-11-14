angular.module('sharedcart')

.controller('loginCtrl', function($scope, loginService){
   $scope.user = new loginService();
   $scope.user.$save(function(success, response){
       console.log(response);
   })
})

.controller('mygroupCtrl', function($scope){
   
})

.controller('groupCtrl', function($scope){
   
});
