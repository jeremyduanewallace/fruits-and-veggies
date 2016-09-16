/* setup your angular app here */
var app = angular.module("myModule", []);

// setup your controller here
var myController = function($scope){
  $scope.message = "Hello Angular";
  
}

// register your controller with the module here
app.controller("myController", myController);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
