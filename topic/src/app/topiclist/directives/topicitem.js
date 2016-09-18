/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.topiclist.directives.topicitem',['app.topiclist.directives.topiclist']).directive('topicItem',function(){
    return {
        restrict:'EA',
        template:'<section class="topicitem">' +
            '<topic-item></topic-item>'+
        '</section>'
    }
})
