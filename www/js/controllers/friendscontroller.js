function friendsController($scope, $http){
  $http.get('http://192.168.3.186:8000/users').then(function(e){
    $scope.users = e.data;
  });
}
