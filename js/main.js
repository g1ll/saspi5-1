function cartController($scope) {
	$scope.cart = [{
		name: 'Arroz',
		quantity: 2,
		price: 2.38
	}];
	$scope.weekDay = function() {
		return new Date().getDay();
	};
	$scope.addProduct = function (productName, quantity, price) {
		$scope.cart.push({
			name: productName,
			quantity: quantity,
			price: price
		});
	};
}