/**
 * Created by Lucien on 2016/9/16.
 */
angular.module('common.netService', [])
    .constant("config",{
        host:"http://localhost:9001"
    })
    .constant("apiUrl", {
        getTopic: '/topic/get',
        searchTopic: '/topic/search',
        addTopic: '/topic/add',
        deleteTopic: '/topic/delete'
    })
    .service('netService', function ($http, apiUrl,config) {
    var $this, fn, url;
    $this = this;
    fn = function (url) {
        return $this[url] = function (method, data) {
            var opts;
            if (method.toLowerCase() === 'get' || method === 'delete') {
                opts = {
                    method: method,
                    url: config.host+apiUrl[url],
                    params: data
                };
            } else {
                opts = {
                    method: method,
                    url: config.host+apiUrl[url],
                    data: data
                };
            }
            return $http(opts);
        };
    };
    for (url in apiUrl) {
        fn(url);
    }
});
