/**
 * Created by sandepan on 7/28/2015.
 */


var machineStats = module.exports;
var machine = require("./model").machine;
machineStats.getInitialCondition = function(){
    return machine.initialState();
}

machineStats.getDrilledStats = function(label){
    return machine.drilledState(label);
}