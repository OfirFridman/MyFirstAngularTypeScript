(function (angular) {
    'use strict';
    var Ctrl = (function () {
        function Ctrl($scope) {
            $scope.name = "ofir";
        }
        return Ctrl;
    }());
    angular.module('app')
        .controller('ctrl', Ctrl);
})(angular);
//# sourceMappingURL=ctrl.js.map