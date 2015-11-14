angular.module('sharedcart')
    
.factory('loginService', function($resource){
    return $resource('/login', null, null);
});