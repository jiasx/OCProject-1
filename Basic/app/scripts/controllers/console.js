'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('ConsoleCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
    $scope.logout = () => {
      $state.go('login');
    };

  }]);
