/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.topiclist.directives.topic',[]).directive('topic',function(){
    return {
        restrict:'EA',
        template:'<div class="topic">' +
        '<a  ui-sref="detail({{id:item.id}})"'+
        ' ng-style="{\'background-image\':\'url({{item.img}})\'} " class="topic-img">' +
        '<div class="cm-count-con">' +
        '<span class="cm-count-tip"></span><span class="cm-count">{{item.commentcount}}</span>'+
          '</div>'+
            '<div class="topic-titlte-con">'+
            '<h1 class="topic-title">{{item.title}}</h1>' +
            '</div>'+
        '</a>'+
        '</div>',
        scope:{item:"=item"}
    }
});
