function compteCtrl($scope, $http, $state){
  $scope.user = {};
  $scope.add = function () {
    var data = $scope.user;
    $state.go('app.new')
    $http.post('http://localhost:8000/users', data);
  };
}
