'use strict';

angular.module("basic.header", [
    {
        // files: ['components/sidebar/sidebar.css']
    }
])

    .directive('cHeader', [function () {
        return {
            restrict: 'EA',
            replace: true,
            // templateUrl: 'views/directive/header.html',
            templateUrl: '<div>Hi 我是林炳文~~~</div>',
            controller: ['$state', '$scope', function($state, $scope){
                $scope.$state = $state;
            }]
        }
    }]);

