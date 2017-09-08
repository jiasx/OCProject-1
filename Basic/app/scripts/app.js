'use strict';

/**
 * @ngdoc overview
 * @name basicApp
 * @description
 * # basicApp
 *
 * Main module of the application.
 */
angular
  .module('basic', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngFileUpload',
    "isteven-multi-select",
    "dndLists",
    'ui.bootstrap',
    'ui-notification',
    'angularSpinner',
    'ngCookies',
    'ui.select',
    'toggle-switch',
    'cfp.hotkeys',
    'ui.bootstrap.datetimepicker',
    'angularMoment',
    'chart.js',
    'ui.router.state.events',
    'basic.router',
    
    // 'basic.resource',
    'basic.services'
    // 'basic.controller',
    // 'basic.filter'
  ])
  .config(['$translateProvider', '$windowProvider', function ($translateProvider, $windowProvider) {
    let window = $windowProvider.$get();
    let lang = window.navigator.userLanguage || window.navigator.language;
    console.log('lang', lang);
    if (lang) {
      lang = lang.substr(0, 2);
      $translateProvider.preferredLanguage(lang);
    }
  }])

  .run(['$rootScope', '$state',
  function ($rootScope, $state) {

   
    // 路由跳转
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      console.log('toState', toState.name);
      $rootScope.tab = toState.name;
     
    });


  
  }]);
