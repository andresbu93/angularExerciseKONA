app.factory('KonaServices', function ($http, $q) {

  var employee;

  return {

    // Call services of apikona

    getListEmployees : function() {

      var deferred = $q.defer();
      $http.get('https://gentle-springs-93598.herokuapp.com/employees')
        .then(function(response) {
          deferred.resolve(response.data);
        }, function(error) {
          deferred.reject(error);
        });
      return deferred.promise;
    },

    addNewEmployee : function(employee) {

      var deferred = $q.defer();
      $http.post('https://gentle-springs-93598.herokuapp.com/employees', employee)
        .then(function(response) {
          deferred.resolve(response.data);
        }, function(error){
          deferred.reject(error);
        });
      return deferred.promise;
    },

    updateEmployee : function(employee) {
      var deferred = $q.defer();
      $http.post('https://gentle-springs-93598.herokuapp.com/updateEmployee', employee)
        .then(function(response) {
          deferred.resolve(response.data);
        }, function(error){
          deferred.reject(error);
        });
      return deferred.promise;
    },

    deleteEmployee : function(employee) {
      var deferred = $q.defer();
      $http.post('https://gentle-springs-93598.herokuapp.com/deleteEmployee', employee)
        .then(function(response) {
          deferred.resolve(response.data);
        }, function(error){
          deferred.reject(error);
        });
      return deferred.promise;
    },

    // Get and set a employee

    getEmployee : function(){
      return employee;
    },

    setEmployee : function(emp){
      employee = emp;
    }

  };
  $http.get()

});
