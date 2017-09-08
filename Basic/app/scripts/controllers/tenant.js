'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('TenantCtrl', ['$rootScope', '$scope', '$state','addTenant',
   function ($rootScope, $scope, $state,addTenant) {
    
      //添加租户
  $scope.addTenant = function () {
    addTenant.open($scope.nodeId).then(function (tenant) {
      
    });
  };

  }]);
