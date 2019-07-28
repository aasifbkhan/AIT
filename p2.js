var app = angular.module('profile', []);
    app.controller('myController',function ($scope) {

        // JSON ARRAY TO POPULATE TABLE.
        $scope.infoArray =
        [
            { 'name': 'Mr. John', 'desig': 'Senior Software Developer' , 'company': 'Infosys' , 'Job ID': '2001' }
        ];

        // GET VALUES FROM INPUT BOXES AND ADD A NEW ROW TO THE TABLE.
        $scope.addRow = function () {
            if ($scope.name != undefined && $scope.class != undefined && $scope.code != undefined && $scope.subnme != undefined) {
                var info = [];
                info.name = $scope.name;
                info.class = $scope.class;
                info.code = $scope.code;
                info.subnme = $scope.subnme;

                $scope.infoArray.push(info);

                // CLEAR TEXTBOX.
            }
        };

        // REMOVE SELECTED ROW(s) FROM TABL
   
         $scope.deleteRow= function (i) {
       $scope.infoArray.splice(i, 1);
   };
    });