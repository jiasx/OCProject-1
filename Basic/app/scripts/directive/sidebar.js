'use strict';

angular.module("basic.sidebar", [
    {
        // files: ['components/sidebar/sidebar.css']
    }
])

    .directive('cSidebar', [function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directive/sidebar.html',
            controller: ['$state', '$scope', function($state, $scope){
                $scope.$state = $state;
            }]
        }
    }]);

