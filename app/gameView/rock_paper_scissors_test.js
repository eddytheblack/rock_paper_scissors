'use strict';

describe('myApp.gameView module', function() {

  beforeEach(module('myApp.gameView'));
  
  var $controller;

  beforeEach(inject(function(_$controller_) {
	  $controller = _$controller_
  }));

  describe('$scope.result', function() {
	  it('checks that the game ties when options game options are the same', function() {
		  var $scope = {};
		  var controller = $controller('RockPaperScissorsCtrl', { $scope : $scope })
		  $scope.gameResult('rock', 'rock')
		  expect($scope.result).toEqual('Tie Game')
           });

	  it('checks that Player with paper beats rock', function() {
		  var $scope = {};
		  var controller = $controller('RockPaperScissorsCtrl', { $scope : $scope })
		  $scope.gameResult('paper', 'rock')
		  expect($scope.result).toEqual('Player')
           });

	  it('checks that Player with rock beats scissors', function() {
		  var $scope = {};
		  var controller = $controller('RockPaperScissorsCtrl', { $scope : $scope })
		  $scope.gameResult('rock', 'scissors')
		  expect($scope.result).toEqual('Player')
           });

	  it('checks that Player with scissors beats paper', function() {
		  var $scope = {};
		  var controller = $controller('RockPaperScissorsCtrl', { $scope : $scope })
		  $scope.gameResult('scissors', 'paper')
		  expect($scope.result).toEqual('Player')
           });

	  it('checks that Computer wins with rock beats scissors', function() {
		  var $scope = {};
		  var controller = $controller('RockPaperScissorsCtrl', { $scope : $scope })
		  $scope.gameResult('scissors', 'rock')
		  expect($scope.result).toEqual('Computer')
           });
  });
});
