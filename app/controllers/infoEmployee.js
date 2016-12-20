app.controller('InfoEmployee', function(KonaServices, $scope){

  var employee = KonaServices.getEmployee();

  $scope.first  = employee.first;
  $scope.last   = employee.last;
  $scope.state  = employee.state;
  $scope.city   = employee.city;
  $scope.street = employee.street;
  $scope.email  = employee.email;
  $scope.phone  = employee.phone;
  $scope.gender = employee.gender;


});
