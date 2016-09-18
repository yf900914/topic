/**
 * Created by Lucien on 2016/9/15.
 */
angular.module('app.routes',['ui.router']).config(function($stateProvider,$httpProvider){
    $httpProvider.defaults.headers.common["X-Requested-With"]='XMLHttpRequest';
    return $stateProvider.state('search',{
        url:'/search',
        template:'<topiclist></topiclist>',
        controller:'listController'
    }).state('detail',{
        url:'/detail',
        template:'<topicdetail></topicdetail>'
    });
});
