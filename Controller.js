var application = angular.module("MyApp2",['ngRoute']);   //ngRoute is the module or dependency required 

application.config(function($routeProvider){       // calling service   routProvide is service here
	$routeProvider
	.when('/login',{
		templateUrl : "Login.html",
		controller : "loginCtrl"
	})
	.when('/home',{
		templateUrl : "Home.html",
		controller : "homeCtrl"
	})
	.otherwise({
		redirectTo:'/login'
	});
});


application.controller('mainCtrl',function($scope,$location){
	$scope.loginFunction = function(){
		alert('started');
		$location.path('/login');
	}
	
});

application.controller('loginCtrl',function($scope,$location,$http){
	$scope.homeFunction = function(){
	$http.get('http://localhost:5005/home?Name='+$scope.Name).then(function(output){
		if(output.data.Report == "success"){
			$location.path('/home');
		} else{
			alert('not success');
			$location.path('/login');
		}
	});
	}
	
});

application.controller('homeCtrl',function($scope){
	
});