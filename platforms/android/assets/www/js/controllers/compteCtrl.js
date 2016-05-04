function compteCtrl($scope, $http, $state, $rootScope){
  $scope.user = {};
  $scope.add = function () {
    $scope.i++;
    var data = $scope.user;
    $state.go('app.new')
    $http.post('http://192.168.3.186:8000/users', data).then(function(res){
      $rootScope.user = res.data;
    });
  };
  $scope.next = function(){
    $state.go('app.profile')
  }
}
