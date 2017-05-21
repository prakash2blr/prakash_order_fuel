admireApp.controller('loginController',['$rootScope','$scope','loginService', function ($rootScope,$scope,loginService){
	$scope.headertemplate="templates/headers/headerlogin.html";
		$scope.submitLogin=function(){
				loginService.login($scope); 
			}
}]);

admireApp.controller('registerController', ['$rootScope','$scope','$http','$location','Upload',function($rootScope,$scope,$http,$location,Upload){
    $scope.headertemplate="templates/headers/headerlogin.html"
	$scope.submitRegister=function(file){
         file.upload = Upload.upload({
          url: '/register',
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          fields: $scope.newuser,
          file: file,
          fileFormDataName: 'register-form'
        }).success(function(data){
             if(data){
              $location.path("/");
             }      
         });
	}
}]);

admireApp.controller('homeController', ['$rootScope','$scope','$http','$location','$modal','loginService','getPostService',function($rootScope,$scope,$http,$location,$modal,loginService,getPostService){
		$scope.headertemplate="templates/headers/headerlogged.html";
        $scope.bunkList=[];
       // getPostService.getPostData(function(output){
            $scope.bunkList=[
            {
              id:1,
              name:'name 1',
              address:'address1 address 1 address1 address 1 address1 address 1 address1 address 1 ',
              image_url:'http://s3.freefoto.com/images/21/34/21_34_6_web.jpg',                          
            },
              {
                id:2,
              name:'name 1',
              address:'address1 address 1 address1 address 1 address1 address 1 address1 address 1 ',
              image_url:'http://www.freefoto.com/images/21/34/21_34_9---Shell-Petrol-Station--Austria_web.jpg'
            },
              {
                id:3,
              name:'name 1',
              address:'address1 address 1 address1 address 1 address1 address 1 address1 address 1 ',
              image_url:'http://www.hpretail.in/sites/all/themes/hpcl_ret/images/auto_lpg2.jpg',                          
            },
              {
                id:4,
              name:'name 1',
              address:'address1 address 1 address1 address 1 address1 address 1 address1 address 1 ',
              image_url:'http://www.shyaminteriors.com/images/canopy/6.jpg',                          
            },
              {
                id:5,
              name:'name 1',
              address:'address1 address 1 address1 address 1 address1 address 1 address1 address 1 ',
              image_url:'http://www.freefoto.com/images/21/34/21_34_2---Petrol-Station_web.jpg',                          
            },
            ]
     //   }); 
        $scope.logout=function(){
          loginService.logout();
        }
        $scope.decrementFuel=function(bunkId){
          var counterElement=$('#order-count-'+bunkId);
                  if(parseInt(counterElement.html())>1){
                    counterElement.html(parseInt(counterElement.html())-1)          
                  }
                  else{
                      $scope.open("Your Orders should be less than 3 and greater than 0","error");
                  }
          
        }
       $scope.incrementFuel=function(bunkId){
          var counterElement=$('#order-count-'+bunkId);
                  if(parseInt(counterElement.html())<3){
                    counterElement.html(parseInt(counterElement.html())+1)          
                  }
                  else{
                      $scope.open("Your Orders should be less than 3 and greater than 0","error");
                  }
          
        }
        $scope.orderFuel=function(bunkId){
           var counterElement=$('#order-count-'+bunkId);
           $scope.open("Message sent for bunkid "+bunkId+" with value ="+counterElement.html()+" and you cannot order more unless order is delivered or canceled","success");
          
        }
         $scope.open=function(message,errorType){
          $.notify(message,{ globalPosition: 'top right',className:errorType,autoHide:false});
         }
}]);



