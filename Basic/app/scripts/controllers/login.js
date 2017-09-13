'use strict';
/**
 * Created by sorcerer on 2017/8/3.
 */

angular.module('basic')
  .controller('loginCtrl', ['$scope','$rootScope','$state','$filter', function ($scope,$rootScope,$state,$filter) {
    $scope.usermessage = {
      username: '',
      password: ''
    }
    //国际语义化
    $scope.loginaccount = $filter('translate')('web_login_001');
    $scope.loginname = $filter('translate')('web_login_002');
    $scope.loginnameblank = $filter('translate')('web_login_003');
    $scope.loginpass = $filter('translate')('web_login_004');
    $scope.loginpassblank = $filter('translate')('web_login_005');
    $scope.loginfoget = $filter('translate')('web_login_006');
    $scope.loginbtn = $filter('translate')('web_login_007');
    $scope.noaccount = $filter('translate')('web_login_008');
    $scope.loginreg = $filter('translate')('web_login_009');

    //enter 进入页面
    $scope.enterLogin = (e) => {
      if (e.keyCode == 13) {
        $rootScope.error_name = false;
        if ($scope.usermessage.username == '' || $scope.usermessage.password == '') {
          $rootScope.error_name = true;
        }else{
          $state.go('console.tenant');
        }
      }
    };

    // $scope.gologin=()=> {
    //   $rootScope.error_name = false;
    //   if ($scope.usermessage.username == '' || $scope.usermessage.password == '') {
    //     $rootScope.error_name = true;
    //   }else{
    //     $state.go('console.tenant');
    //   }
    // }

    $scope.gologin = () => {
      //$state.go('dataExplore');
      if ($scope.usermessage.password !== undefined) {
        $rootScope.gologin($scope.usermessage.username, $scope.usermessage.password);

      }
    };

    $scope.register = () => {
      $state.go('regist');
    };



    $scope.isForget = false;



    // $scope.gologin= function () {
    //   login.post($scope.usermessage, function (data) {
    //     //console.log('data', data);
    //     Cookie.set('username',$scope.usermessage.username ,  24 * 3600 * 1000);
    //     Cookie.set('token', data.token, 24 * 3600 * 1000);
    //     $state.go('console.tenant');
    //   })
    // }
  }]);
