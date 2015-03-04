app = angular.module('econcalc', [
	// 'ngResource',
	'ngRoute',
]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.otherwise({
			templateUrl: 'site.html',
			controller: 'SiteCtrl'
		});
});

app.controller('SiteCtrl', ['$scope', function($scope){
	// Start Single Payment
	$scope.singlePaymentFutureData = {};
	$scope.singlePaymentPresentData = {};

	$scope.singlePaymentFuture = function(data){
		var P = parseFloat(data.P);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = P * Math.pow((1+i), n);

		if(!isNaN(result)){
			data.F = result.toFixed(4);
		}
		else{
			data.F = "";
		}
	};
	$scope.singlePaymentPresent = function(data){
		var F = parseFloat(data.F);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = F * Math.pow((1+i), (-1 * n));

		if(!isNaN(result)){
			data.P = result.toFixed(4);
		}
		else{
			data.P = "";
		}
	};

	$scope.$watch('singlePaymentFutureData', function (value) {
		$scope.singlePaymentFuture(value);
	}, true);
	$scope.$watch('singlePaymentPresentData', function (value) {
		$scope.singlePaymentPresent(value);
	}, true);

	// End Single Payment

	// Start uniform series
	$scope.uniformSeriesToFutureData = {};
	$scope.uniformSeriesFromFutureData = {};
	$scope.uniformSeriesToPresentData = {};
	$scope.uniformSeriesFromPresentData = {};

	$scope.uniformSeriesToFuture = function(data){
		var A = parseFloat(data.A);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = A * (Math.pow(1+i, n) - 1) / i;

		if(!isNaN(result)){
			data.F = result.toFixed(4);
		}
		else{
			data.F = "";
		}
	}
	$scope.uniformSeriesFromFuture = function(data){
		var F = parseFloat(data.F);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = F * i / (Math.pow(1+i, n) - 1);

		if(!isNaN(result)){
			data.A = result.toFixed(4);
		}
		else{
			data.A = "";
		}
	}
	$scope.uniformSeriesFromPresent = function(data){
		var P = parseFloat(data.P);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = P * (i * Math.pow(1+i, n)) / (Math.pow(1+i, n) - 1);

		if(!isNaN(result)){
			data.A = result.toFixed(4);
		}
		else{
			data.A = "";
		}
	}
	$scope.uniformSeriesToPresent = function(data){
		var A = parseFloat(data.A);
		var i = parseFloat(data.i);
		var n = parseFloat(data.n);

		var result = A * (Math.pow(1+i, n) - 1) / (i * Math.pow(1+i, n));

		if(!isNaN(result)){
			data.P = result.toFixed(4);
		}
		else{
			data.P = "";
		}
	}

	$scope.$watch('uniformSeriesToFutureData', function (value) {
		$scope.uniformSeriesToFuture(value);
	}, true);

	$scope.$watch('uniformSeriesFromFutureData', function (value) {
		$scope.uniformSeriesFromFuture(value);
	}, true);

	$scope.$watch('uniformSeriesToPresentData', function (value) {
		$scope.uniformSeriesToPresent(value);
	}, true);

	$scope.$watch('uniformSeriesFromPresentData', function (value) {
		$scope.uniformSeriesFromPresent(value);
	}, true);
	// End uniform series

	// Start arithmetic gradient
	$scope.arithmeticGradientUniformData = {};
	$scope.arithmeticGradientPresentData = {};

	$scope.arithmeticGradientUniform = function(data){
		var i = parseFloat(data.i);
		var G = parseFloat(data.G);
		var n = parseFloat(data.n);

		var result = G * (1/i - n/(Math.pow(1+i, n) - 1));

		if(!isNaN(result)){
			data.A = result.toFixed(4);
		}
		else{
			data.A = "";
		}
	};

	$scope.arithmeticGradientPresent = function(data){
		var i = parseFloat(data.i);
		var G = parseFloat(data.G);
		var n = parseFloat(data.n);

		var result = G * (Math.pow(1+i,n) - i*n - 1) / (i*i*Math.pow(1+i,n));

		if(!isNaN(result)){
			data.P = result.toFixed(4);
		}
		else{
			data.P = "";
		}
	};

	$scope.$watch('arithmeticGradientUniformData', function (value) {
		$scope.arithmeticGradientUniform(value);
	}, true);
	$scope.$watch('arithmeticGradientPresentData', function (value) {
		$scope.arithmeticGradientPresent(value);
	}, true);
	// End arithmetic gradient	

	// Start Geomentric Gradient
	$scope.geometricGradientDifferentData = {};

	$scope.geometricGradientDifferent = function(data){
		var A = parseFloat(data.A);
		var i = parseFloat(data.i);
		var g = parseFloat(data.g);
		var n = parseFloat(data.n);

		if(i == g){
			var result = A * n * Math.pow(1+i, -1);
		}
		else{
			var result = A * (1 - (Math.pow((1+g), n) * Math.pow((1+i), (-1 * n))))/(i-g);
		}

		if(!isNaN(result)){
			data.result = result.toFixed(4);
		}
		else{
			data.result = "";
		}
	};

	$scope.$watch('geometricGradientDifferentData', function (value) {
		$scope.geometricGradientDifferent(value);
	}, true);
	// End Geomentric Gradient
}]);