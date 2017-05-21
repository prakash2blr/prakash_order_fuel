'use strict';
admireApp.factory('getPostService',function($http, $location, sessionService){
	return{		
			getPostData:function(handleData){
				    $http.get('/getpostdataforfan').success(function (response){	
				   		handleData(response);
			        });
			}
		}
});