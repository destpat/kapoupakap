function friendCtrl($scope, $state, $http) {

  $http.get('http://192.168.3.186:8000/users').then(function(res){
    $scope.users = res.data;
    console.log(res.data[1]);
  });
}

$scope.notify = function(){
  $http.post('http://192.168.3.186:8000/users')
}
