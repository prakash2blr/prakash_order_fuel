var admireApp = angular.module('admire', ['ngRoute','ui.bootstrap','ngFileUpload']);

admireApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
		templateUrl: 'templates/login.html',
		controller:'loginController'
    }). when('/register', {
		templateUrl: 'templates/register.html',
		controller:'registerController'
    }).when('/home', {
		templateUrl: 'templates/home.html',
		controller:'homeController'
    }).otherwise({
        templateUrl: 'templates/login.html',
        controller:'loginController'
      });
}]);

admireApp.run(function($rootScope, $location, loginService){
	var routespermission=['home','aboutCeleb','homeceleb'];  
	$rootScope.$on('$routeChangeStart', function(){
		if( routespermission.indexOf($location.path().split('/')[1]) !=-1)
		{
			var connected=loginService.islogged();
			connected.then(function(msg){
				if(!msg.data) $location.path('/login');
			});
		}
	});
});