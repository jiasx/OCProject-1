'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('UserCtrl', ['$rootScope', '$scope', '$state','createTaskPlan', 
  function ($rootScope, $scope, $state,createTaskPlan) {
    $scope.openTaskPlan = (createOrEdit) => {
      createTaskPlan.open(createOrEdit, $scope.currentEditSchedule).then(function (schedule) {
        
        

      })
    }

  }]);
