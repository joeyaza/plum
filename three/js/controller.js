angular
.module("angApp", [] )
.controller("MainController", MainController);

MainController.$inject = ['$scope','$http']


function MainController($scope, $http) {
  $scope.main = [];
  $scope.info = [];
  $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  .success(function(data) {
    $scope.main = data;
    $scope.topten = data.slice(0,10);
    console.log($scope.topten);
    for (i = 0; i < $scope.topten.length; i++) { 
      $http.get('https://hacker-news.firebaseio.com/v0/item/'+$scope.topten[i]+'.json')
        .success(function(data) {
          $scope.info.push(data);
          console.log($scope.info);
        })
    }
  })
};