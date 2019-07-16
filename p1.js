var app = angular.module('myApp', []);
    app.controller('myController',function ($scope) {

        // JSON ARRAY TO POPULATE TABLE.
        $scope.infoArray =
        [
            { 'course': 'MCA', 'class': 'Sy' , 'code': '221' , 'subnme': 'CPP' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.course != undefined && $scope.class != undefined && $scope.code != undefined && $scope.subnme != undefined) {
                var info = [];
                info.course = $scope.course;
                info.class = $scope.class;
                info.code = $scope.code;
                info.subnme = $scope.subnme;

                $scope.infoArray.push(info);

                // CLEAR TEXTBOX.
                $scope.course = null;
                $scope.class = null;
                $scope.code = null;
                $scope.subnme = null;
            }
        };

        // REMOVE SELECTED ROW(s) FROM TABL
   
         $scope.deleteRow= function (i) {
       $scope.infoArray.splice(i, 1);
   };
    });