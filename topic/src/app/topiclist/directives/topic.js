/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.topiclist.directives.topic',[]).directive('myTopic',function(){
    return {
        restrict:'EA',
        template:'<div class="topic">' +
        '<img class="topic-img" ng-src="{{item.img}}"/>' +
        '<span class="topic-title">{{item.title}}</span>' +
        '<span class="topic-content">{{item.content}}</span>' +
        '</div>',
        scope:{item:"=item"},
    }
})
