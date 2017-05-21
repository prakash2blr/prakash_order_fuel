'use strict';
admireApp.factory('loginService',function($http, $location, sessionService){
	return{
		login:function(scope,isCeleb){
			var urlPost='/login'
			var afterLogin='/home';
			var invalidLoginPath='/login';
			if(isCeleb){
				urlPost='/loginceleb';
				afterLogin='/homeceleb';
				invalidLoginPath='/loginceleb';
			}
			//var $promise=$http.post(urlPost,scope.login); //send data to user.php
			//$promise.then(function(msg){
			//	var uid=msg.data;
			//	if(uid){
				//	sessionService.set('uid',uid);
				sessionService.set('uid',11);
					$location.path(afterLogin);
				//}	       
				//else  {
				//	$location.path(invalidLoginPath);
				//}				   
			//});
		},
		logout:function(isCeleb){
			var invalidLoginPath='/login';
			sessionService.destroy('uid');
			$location.path(invalidLoginPath);
		},
		islogged:function(){
			var $checkSessionServer=$http.post('/isLogged',{uid:sessionService.get('uid')});
			return $checkSessionServer;
		}
	}
});