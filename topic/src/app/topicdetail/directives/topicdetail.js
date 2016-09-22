/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.topicdetail.directives.topicdetail',[]).directive('topicDetail',function(){
    return {
        restrict:'EA',
        template:'<div class="topic-detail-infor">' +
        '<div class="detail-con" ng-style="{\'background-image\':\'url(\' + topicinfo.img +\')\'}">' +
       '<h1 class="detail-title">{{topicinfo.title}}</h1>'+
        '</div>'+
        '<p class="detail-content">{{topicinfo.content}}</p>' +
            '<div class="support-side-con">' +
        '<section class="support-side">' +
        '<div class="pro-side">' +
        '<span class="pro-viewpoint">{{topicinfo.prosopinion}}</span>' +
        '</div>' +
         '<div class="vs-con">' +
        '<div class="vs"></div>' +
        '</div>'+
          '<div class="con-side">' +
        '<span class="con-viewpoint">{{topicinfo.consopinion}}</span>' +
        '</div>'+
        '</section>' +
            '<section class="comment-head">' +
        '<span class="all-comment-count">全部观点({{topicinfo.commentcount}})</span>' +
        '<span class="comment-filter"></span><ul class="viewpoint-side-con" style="display:none">' +
        '<li class="all-comment">全部</li>' +
        '<li class="support">蓝方</li>' +
        '<li class="oppose">红方</li>' +
        '</ul>' +
        '</section><section class="comment-con"><div></div></section>'+
        '</div>>'+
        '</div>'
    }
})
