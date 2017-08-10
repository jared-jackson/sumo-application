angular.module('SumoApp', [])
    .controller('SumoController', ['$scope', '$http', '$log',
        function ($scope, $http, $log) {
            var answer_count = 1;

            console.log("loaded angular")


            $scope.submitQuestion = function(){
                var test = $scope.question;
                console.log(test);
            }

            // $http({
            //     method: 'GET',
            //     url: '/api/getSensorData/' + 'ddb41e3c-19a1-4431-b737-381f19857257'
            // }).then(function successCallback(response) {
            //     var data = response.data;
            //     $scope.eye_address = data[0].eyes[0].addr;
            //     $scope.eye_sensors = data[0].eyes[0].sensors;
            // }, function errorCallback(response) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            // });


        }
    ]);



