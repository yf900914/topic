/**
 * Created by Lucien on 2016/9/16.
 */
angular.module('app.topiclist.controller', ['app.topiclist.directives.topiclisth']).controller('listController', function($scope, netService) {
    netService.searchTopic("post", {
        pagecount: 20
    }).success(function(body) {
        var data;
        if (body.errcode !== 0) {
            console.error("netService.addTask", body);
        }
        data = body.payload.rows;
        console.log(data);
        return $scope.topiclist = data;
    });
});
