app.controller('InfoEmployee', function(KonaServices, $scope, $location){

  var employee = KonaServices.getEmployee();

  $scope.first  = employee.first;
  $scope.last   = employee.last;
  $scope.state  = employee.state;
  $scope.city   = employee.city;
  $scope.street = employee.street;
  $scope.email  = employee.email;
  $scope.phone  = employee.phone;
  $scope.gender = employee.gender;


  $scope.updateEmployee = function(){
    employee.first  = $scope.first;
    employee.last   = $scope.last;
    employee.state  = $scope.state;
    employee.city   = $scope.city;
    employee.street = $scope.street;
    employee.email  = $scope.email;
    employee.phone  = $scope.phone;
    employee.gender = $scope.gender;

    KonaServices.updateEmployee(employee)
      .then(function(success) {
        $location.path('/');
      }, function(error) {
        alert("Error");
      });
  }

  $scope.deleteEmployee = function(){
    KonaServices.deleteEmployee(employee)
      .then(function(success) {
        $location.path('/');
      }, function(error) {
        alert("Error");
      });
  };

});
