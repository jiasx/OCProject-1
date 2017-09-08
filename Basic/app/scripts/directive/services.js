/**
 * Created by sorcerer on 2017/6/7.
 */
"use strict";
angular.module('basic.services', ['ngResource'])
  .service('Cookie', [function () {
    this.set = function (key, val, expires) {
      var date = new Date();
      date.setTime(date.getTime() + expires);
      document.cookie = key + "=" + val + "; expires=" + date.toUTCString();
    };
    this.get = function (key) {
      var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      var arr = document.cookie.match(reg);
      if (arr) {
        return (arr[2]);
      }
      return null;
    };
    this.clear = function (key) {
      this.set(key, "", -1);
    };
  }])

  

  .service('addTenant', ['$uibModal', function ($uibModal) {
    this.open = function (id) {
      return $uibModal.open({
        backdrop: 'static',
        keyboard: false,
        // animation:true,
        templateUrl: 'views/tpl/addTenant.html',
        size: 'default',
        controller: ['$scope', '$uibModalInstance',
          function ($scope, $uibModalInstance) {
            $scope.cancel = function () {
              $uibModalInstance.dismiss();
            };

            $scope.ok = function () {
                
                $uibModalInstance.close();

            };

          }
        ]
      }).result;
    };
  }])

  .service('createTaskPlan', ['$uibModal', function ($uibModal) {
    this.open = function (createOrEdit, editSchedule) {
      return $uibModal.open({
        backdrop: 'static',
        templateUrl: 'views/tpl/createTaskPlan.html',
        size: 'size',
        controller: ['$scope', '$uibModalInstance',
          function ($scope, $uibModalInstance) {
            $scope.schedule = null;
            createOrEdit === 'edit' ? $scope.schedule = editSchedule : $scope.schedule;
            createOrEdit === 'edit' ? $scope.isEdit = true : $scope.isEdit = false;
            $scope.isPause = false;
            //计划设置1
            $scope.grids = {
              changestatus: '每周',
              status: [{name: '每天'}, {name: '每月'}, {name: '每周'}]
            };

            //每周设置
            $scope.weeks = {
              changestatus: '周一',
              status: [{name: '周一'}, {name: '周二'}, {name: '周三'}, {name: '周四'}, {name: '周五'}, {name: '周六'}, {name: '周日'}]
            };
            console.log('1111', $scope.weeks);
            //每月设置
            $scope.months = {
              changestatus: '1',
              status: [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'}, {name: '9'}, {name: '10'}, {name: '11'}
                , {name: '12'}, {name: '13'}, {name: '14'}, {name: '15'}, {name: '16'}, {name: '17'}, {name: '18'}, {name: '19'}, {name: '20'}, {name: '21'}, {name: '22'}, {name: '23'}
                , {name: '24'}, {name: '25'}, {name: '26'}, {name: '27'}, {name: '28'}, {name: '29'}, {name: '30'}, {name: '31'}]
            };

            //每小时设置
            $scope.hours = {
              changestatus: '0',
              status: [{name: '0'}, {name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'}, {name: '9'}, {name: '10'}, {name: '11'}
                , {name: '12'}, {name: '13'}, {name: '14'}, {name: '15'}, {name: '16'}, {name: '17'}, {name: '18'}, {name: '19'}, {name: '20'}, {name: '21'}, {name: '22'}, {name: '23'}
              ]
            };

            //每分钟设置
            $scope.minutes = {
              changestatus: '0',
              status: [{name: '0'}, {name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}, {name: '6'}, {name: '7'}, {name: '8'}, {name: '9'}, {name: '10'}, {name: '11'}
                , {name: '12'}, {name: '13'}, {name: '14'}, {name: '15'}, {name: '16'}, {name: '17'}, {name: '18'}, {name: '19'}, {name: '20'}, {name: '21'}, {name: '22'}, {name: '23'}
                , {name: '24'}, {name: '25'}, {name: '26'}, {name: '27'}, {name: '28'}, {name: '29'}, {name: '30'}, {name: '31'}, {name: '32'}, {name: '33'}, {name: '34'}, {name: '35'}, {name: '36'}
                , {name: '37'}, {name: '38'}, {name: '39'}, {name: '40'}, {name: '41'}, {name: '42'}, {name: '43'}, {name: '44'}, {name: '45'}, {name: '46'}, {name: '47'}, {name: '48'}, {name: '49'}, {name: '50'}
                , {name: '51'}, {name: '52'}, {name: '53'}, {name: '54'}, {name: '55'}, {name: '56'}, {name: '57'}, {name: '58'}, {name: '59'}
              ]
            };

            //初始值
            $scope.grids.changestatus = '每天';
            $scope.isWeekOk = false;
            $scope.isMonthOk = false;
            $scope.$watch('grids.changestatus', function (n, o) {
              if (n === o) {
                return;
              }
              if (n === '每天') {
                $scope.isWeekOk = false;
                $scope.isMonthOk = false;
              }
              if (n === '每周') {
                $scope.isWeekOk = true;
                $scope.isMonthOk = false;
              }
              if (n === '每月') {
                $scope.isWeekOk = false;
                $scope.isMonthOk = true;
              }
            });
           
            


            $scope.cancel = function () {
              $uibModalInstance.dismiss();
            };
            $scope.save = function () {
              $uibModalInstance.close();
            };
          }]
      })
        .result;
    };
  }])

  
