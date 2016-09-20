/**
 * Created by Lucien on 2016/9/20.
 */
angular.module('app.topicdetail.controller',['app.topicdetail.directives.topicdetail'])
    .controller('detailController',function($scope,netService ){
        netService.detailTopic ("get").success(function(body){
            var data;
            if (body.errcode !== 0) {
                console.error("netService.addTask", body);
            }
        })
    })
