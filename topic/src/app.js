/**
 * Created by Lucien on 2016/9/15.
 */
var app = angular.module('app', ['ui.router', 'app.routes',
    'app.common.factory',
    'common.netService',
    'app.common.factory',
    'app.topiclist.controller',
    'app.topicdetail.directives.topicdetail']);

app.run(function (netService, $rootScope) {
    return $rootScope.title = "话题列表";
});

