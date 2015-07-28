/**
 * Created by sandepan on 7/28/2015.
 */


var machineStats = modules.exports;
var machine = require("../model").machine;
machineStats.getInitialCondition = function(){
    return machine.initialState();
}