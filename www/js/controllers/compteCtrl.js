function compteCtrl($scope, $http, $state, $rootScope){
  $scope.user = {};
  $scope.add = function () {
    var data = $scope.user;
    $state.go('app.new')
    $http.post('http://192.168.3.186:8000/users', data).then(function(res){
      $rootScope.user = res.data;
    });
  };
}
