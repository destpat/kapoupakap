function friendsController($scope, $http, $state) {
  $http.get('http://192.168.3.186:8000/users').then(function(e) {
    $scope.users = e.data;
  });
  $scope.notify = function(userID) {
    $state.go('app.notify');
    console.log(userID)
    $http.get('http://192.168.3.186:8000/users/' + userID).then(function(f) {
      console.log('http://192.168.3.186:8000/users/' + userID);
      $scope.friend = f.data;
    });
  };
}
