/**
 * Created by sandepan on 7/29/2015.
 */

"use strict";

define(["Q"], function (Q) {
    var callRemoteMethod = function (endPoint, httpMethod, params, headers, dataType) {
        var request = constructRequest(httpMethod, endPoint, params, headers, dataType);
        return makeNetworkCall(request);
    };

    var makeNetworkCall = function (request) {
        var deferred = Q.defer();
        $.ajax(request).
            done(function (data) {
                    deferred.resolve(data);
            }).fail(function (error) {
                if (error.status === 401) {
                    console.log(request)
                    console.log(error)
                }
                deferred.reject(error);
            });
        return deferred.promise;
    };

    var constructRequest = function (httpMethod, endPoint, params, headers, dataType) {
        var request = {
            url: endPoint,
            type: httpMethod,
            data: headers ? !headers['stringify'] ? JSON.stringify(params) : params : JSON.stringify(params),
            dataType: dataType
        };
        request.beforeSend = function (xhr) {
                xhr.setRequestHeader('Content-Type', "application/json");
        };
        return request;
    };

    var get = function (remoteResource, params, headers) {
        return callRemoteMethod(remoteResource, "get", params, headers);
    };
    var post = function (remoteResource, params, headers) {
        return callRemoteMethod(remoteResource, "post", params, headers);
    };
    var put = function (remoteResource, params, headers) {
        return callRemoteMethod(remoteResource, "put", params, headers);
    };

    return {
        get: get,
        post: post,
        put: put
    };
});
