/**
 * Created by sandepan on 7/29/2015.
 */
define(["services/rest-client"], function(rest_client){
    var fetchSummaryReport = function(){
        return rest_client.get("/machineStats");
    }

    var fetchDrilledReport = function (lable) {
        return rest_client.get("/machineStats/drilled?label=" + lable);
    }
    return {
        fetchSummaryReport: fetchSummaryReport,
        fetchDrilledReport:fetchDrilledReport
    }
})