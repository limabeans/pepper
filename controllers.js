'use strict';


(function() {
  var pepperApp = angular.module('pepperApp', []);

  pepperApp.controller('FriendsController', function($scope) {
    $scope.friends = [
      { name: "Tim", age: 20 },
      { name: "Cassie", age: 18 }
    ];
  });
})();
