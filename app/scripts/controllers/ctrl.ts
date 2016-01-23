(function(angular) {
    'use strict'
    class Ctrl {
        constructor($scope) {
            $scope.name = "ofir";
        }
    }

    angular.module('app')
        .controller('ctrl', Ctrl);
})(angular);
