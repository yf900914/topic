/**
 * Created by Lucien on 2016/9/20.
 */
angular.module('app.topicdetail.controller', ['app.topicdetail.directives.topicdetail'])
    .controller('detailController', function ($scope, $stateParams, netService) {
       // console.log("debug");
        $scope.id=$stateParams.id;
        netService .getTopic ("get",{
            id:$scope.id
        }).success(function(body){
            var data;
            if (body.errcode !== 0) {
                console.error("netService.addTask", body);
            }
            data=body.payload;
            //console.log(data);
            $scope.topicinfo=data;
            console.log ($scope.topicinfo);
        });
    });
