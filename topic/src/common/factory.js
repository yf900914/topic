/**
 * Created by Lucien on 2016/9/16.
 */
angular.module('app.common.factory', []).factory('transferData', function () {
    var get, localStorage, set;
    localStorage = window.localStorage;
    set = function (key, data) {
        return localStorage[key] = JSON.stringify(data);
    };
    get = function (key) {
        if (localStorage[key]) {
            return JSON.parse(localStorage[key]);
        } else {
            return null;
        }
    };
    return {
        set: set,
        get: get
};
});
