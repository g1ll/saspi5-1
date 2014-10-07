var cartApp = angular.module('myCart', []);

cartApp.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'CartCtrl',
        templateUrl: 'index.html'
    }).
    when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'login.html'
    }).
    otherwise({
        redirectTo: '/'
    });
});

cartApp.controller('CartCtrl', function ($scope) {
	$scope.cart = [];
	$scope.weekDay = function() {
		return new Date().getDay();
	};
	$scope.surname = 'Vellar';
	$scope.addProduct = function (productName, quantity, price) {
		$scope.cart.push({
			name: productName,
			quantity: quantity,
			price: price
		});
	};
});

function CartCtrl($scope, $http) {
	$scope.cart = [];
	$scope.weekDay = function() {
		return new Date().getDay();
	};
	$scope.surname = 'Vellar';
	$scope.addProduct = function (productName, quantity, price) {
		$scope.cart.push({
			name: productName,
			quantity: quantity,
			price: price
		});
	};

	$http.get("json/products.json")
    .success(function(response) {$scope.cart = response;});
}