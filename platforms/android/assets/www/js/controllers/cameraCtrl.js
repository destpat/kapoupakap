function cameraCtrl($scope, $cordovaCamera, $http, $rootScope, $state) {

  $scope.pictureUrl = 'http://placehold.it/300x300';
  $scope.takePicture = function() {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
    }
    $cordovaCamera.getPicture(options)
      .then(function(data) {
        console.log('camera data: ' + angular.toJson(data))
        $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
        var temp = {
            user: $rootScope.user.user,
            password: $rootScope.user.password,
            pictureUrl: $scope.pictureUrl
        };
        $http.put('http://192.168.3.186:8000/users/' + $rootScope.user._id, temp);
      }, function(error) {
        console.log('camera error: ' + angular.toJson(data))
      });
  };

  $scope.goProfile = function(){
    $state.go('app.profile');
  }
}
