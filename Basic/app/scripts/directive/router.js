'use strict';
/**
 * Created by sorcerer on 2017/6/1.
 */

angular.module('basic.router', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("console/tenant");
    $stateProvider
     
      // 注册
      .state('regist', {
        url: "/regist",
        templateUrl: 'views/regist.html',
        controller: 'registCtrl'
      })
      // 登录
      .state('login', {
        url: "/login",
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      // 登录前虚拟路由
      .state('console', {
        url: '/console',
        templateUrl: 'views/console.html',
        controller: 'ConsoleCtrl',
        abstract: true

      })
      // 租户管理
      .state('console.tenant', {
        url: '/tenant',
        templateUrl: 'views/tenant.html',
        controller: 'TenantCtrl'

      })
      // 用户管理
      .state('console.user', {
        url: '/user',
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'

      })
      // 角色管理
      .state('console.role', {
        url: '/role',
        templateUrl: 'views/role.html',
        controller: 'RoleCtrl'

      })

      // 服务管理
      .state('console.service', {
        url: '/service',
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl'

      })

      // 登录后虚拟路由
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        abstract: true

      })

       // 角色管理
       .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'

      })






  }]);
