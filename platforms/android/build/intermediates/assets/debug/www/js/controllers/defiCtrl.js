function defiCtrl($scope, $state) {

  $scope.defi1 = (1+Math.floor(Math.random() * 13));
  $scope.defi2 = (1+Math.floor(Math.random() * 13));
  $scope.defi3 = (1+Math.floor(Math.random() * 13));

  if ($scope.defi1 == 1) {
    $scope.defi1 = "De prendre une photo avec nicki minaj"
  }
  if ($scope.defi1 == 2) {
    $scope.defi1 = "De te coller un post-it de servir de tableau scrum"
  }
  if ($scope.defi1 == 3) {
     $scope.defi1 = "De sauter à cloche pied avec une banane entre les jambes"
  }
  if ($scope.defi1 == 4) {
     $scope.defi1 = "De crier comme un singe"
  }
  if ($scope.defi1 == 5) {
     $scope.defi1 = "D'imiter un hipopotame"
  }
  if ($scope.defi1 == 6) {
     $scope.defi1 = "De te déguiser en Polnareff"
  }
  if ($scope.defi1 == 7) {
     $scope.defi1 = "De sauter pendant 10 minutes"
  }
  if ($scope.defi1 == 8) {
     $scope.defi1 = "De faire ta plus laide grimace"
  }
  if ($scope.defi1 == 9) {
     $scope.defi1 = "De brider les yeux"
  }
  if ($scope.defi1 == 10) {
     $scope.defi1 = "De faire le poirier"
  }
  if ($scope.defi1 == 11) {
     $scope.defi1 = "De faire un clin d'oeil"
  }
  if ($scope.defi1 == 12) {
     $scope.defi1 = "De mettre ta tête dans un paquet de chips"
  }
  if ($scope.defi1 == 13) {
     $scope.defi1 = "De manger un petit suisse d'un coup"
  }
  if ($scope.defi1 == 14) {
     $scope.defi1 = "De manger 5 têtes brûlées d'un coup"
  }
  if ($scope.defi1 == 15) {
     $scope.defi1 = "De gober un oeuf"
  }

 // Defi 2
  if ($scope.defi2 == 1) {
     $scope.defi2 = "De prendre une photo avec nicki minaj"
  }
  if ($scope.defi2 == 2) {
     $scope.defi2 = "De te coller un post-it de servir de tableau scrum"
  }
  if ($scope.defi2 == 3) {
     $scope.defi2 = "De sauter à cloche pied avec une banane entre les jambes"
  }
  if ($scope.defi2 == 4) {
     $scope.defi2 = "De crier comme un singe"
  }
  if ($scope.defi2 == 5) {
     $scope.defi2 = "D'imiter un hipopotame"
  }
  if ($scope.defi2 == 6) {
     $scope.defi2 = "De t'habiller comme Polnareff"
  }
  if ($scope.defi2 == 7) {
     $scope.defi2 = "De sauter pendant 10 minutes"
  }
  if ($scope.defi2 == 8) {
     $scope.defi2 = "De faire ta plus laide grimace"
  }
  if ($scope.defi2 == 9) {
     $scope.defi2 = "De brider les yeux"
  }
  if ($scope.defi2 == 10) {
     $scope.defi2 = "De faire le poirier"
  }
  if ($scope.defi2 == 11) {
     $scope.defi2 = "De faire un clin d'oeil"
  }
  if ($scope.defi2 == 12) {
     $scope.defi2 = "De mettre ta tête dans un paquet de chips"
  }
  if ($scope.defi2 == 13) {
     $scope.defi2 = "De manger un petit suisse d'un coup"
  }
  if ($scope.defi2 == 14) {
     $scope.defi2 = "De manger 5 têtes brûlées d'un coup"
  }
  if ($scope.defi2 == 15) {
     $scope.defi2 = "De gober un oeuf"
  }

  // Defi 3
  if ($scope.defi3 == 1) {
     $scope.defi3 = "De prendre une photo avec nicki minaj"
  }
  if ($scope.defi3 == 2) {
     $scope.defi3 = "De te coller un post-it de servir de tableau scrum"
  }
  if ($scope.defi3 == 3) {
     $scope.defi3 = "De sauter à cloche pied avec une banane entre les jambes"
  }
  if ($scope.defi3 == 4) {
     $scope.defi3 = "De crier comme un singe"
  }
  if ($scope.defi3 == 5) {
     $scope.defi3 = "D'imiter un hipopotame"
  }
  if ($scope.defi3 == 6) {
     $scope.defi3 = "De te déguiser en Polnareff"
  }
  if ($scope.defi3 == 7) {
     $scope.defi3 = "De sauter pendant 10 minutes"
  }
  if ($scope.defi3 == 8) {
     $scope.defi3 = "De faire ta plus laide grimace"
  }
  if ($scope.defi3 == 9) {
     $scope.defi3 = "De brider les yeux"
  }
  if ($scope.defi3 == 10) {
     $scope.defi3 = "De faire le poirier"
  }
  if ($scope.defi3 == 11) {
     $scope.defi3 = "De faire un clin d'oeil"
  }
  if ($scope.defi3 == 12) {
     $scope.defi3 = "De mettre ta tête dans un paquet de chips"
  }
  if ($scope.defi3 == 13) {
     $scope.defi3 = "De manger un petit suisse d'un coup"
  }
  if ($scope.defi3 == 14) {
     $scope.defi3 = "De manger 5 têtes brûlées d'un coup"
  }
  if ($scope.defi3 == 15) {
     $scope.defi3 = "De gober un oeuf"
  }
  $scope.friend = function(){
    $state.go('app.friend');
  }
}
