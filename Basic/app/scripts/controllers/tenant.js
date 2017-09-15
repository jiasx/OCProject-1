'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('TenantCtrl', ['$rootScope', '$scope', '$state','addTenant',
   function ($rootScope, $scope, $state,addTenant) {
    $rootScope.login = () => {
      $state.go('login');
    };
    $rootScope.register = () => {
      $state.go('regist');
    };
    
      //添加租户
  $scope.addTenant = function () {
    addTenant.open($scope.nodeId).then(function (tenant) {
      
    });
  };

  }]);
