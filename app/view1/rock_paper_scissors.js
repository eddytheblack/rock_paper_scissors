'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/rock_paper_scissors.html',
    controller: 'RockPaperScissorsCtrl'
  });
}])

.controller('RockPaperScissorsCtrl', function($scope) {
	//Initial values
	$scope.winningMessage = ""
	$scope.computerChoice = ""
	$scope.playerChoice = ""
	$scope.result = ""

        function randomIntBetween(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

        $scope.gameResult = function (playerChoice, computerChoice) {
	       if (playerChoice === computerChoice) {
		       $scope.result =  "Tie Game"
	       } else if (playerChoice === "rock") {
			if (computerChoice === "paper") {
				$scope.result =  "Computer"
			} else if (computerChoice === "scissors") {
				$scope.result =  "Player"
			}
		} else if (playerChoice === "paper") {
			if (computerChoice === "scissors") {
				$scope.result =  "Computer"
			} else if (computerChoice === "rock") {
				$scope.result =  "Player"
			}
		} else if (playerChoice === "scissors") {
			if (computerChoice === "rock") {
				$scope.result =  "Computer"
			} else if (computerChoice === "paper") {
				$scope.result =  "Player"
			}
		} 
	}

	$scope.chooseClick = function(playerChoice) {
		var comOptions = ["rock", "paper", "scissors"]
		var computerChoice = comOptions[randomIntBetween(0, 2)]
	        $scope.playerChoice = playerChoice
	        $scope.computerChoice = computerChoice
	        $scope.gameResult(playerChoice, computerChoice)
		if ($scope.result === "Tie Game") {
			$scope.winningMessage = "The game has tied"
		} else {
			$scope.winningMessage = $scope.result + " has won the round"
		}
	}
});
