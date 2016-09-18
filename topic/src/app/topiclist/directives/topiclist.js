/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.topiclist.directives.topiclist',['app.topiclist.directives.topic']).directive('topicList',function(){
    return {
        restrict:'EA',
        template:'<ul class="topiclist">' +
        '<topic item="item" ng-repeat="item in topiclist"></topic>' +
        '</ul>'
    }
})
