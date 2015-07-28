/**
 * Created by sandepan on 7/29/2015.
 */
define(["services/rest-client"], function(rest_client){
    var fetchSummaryReport = function(){
        return rest_client.get("/machineStats");
    }
    return {
        fetchSummaryReport: fetchSummaryReport
    }
})