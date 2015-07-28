/**
 * Created by sandepan on 7/28/2015.
 */

var machineStatus = module.exports;

machineStatus.initialState = function(){
    return [
        { label: 'Abulia', count: 10 },
        { label: 'Betelgeuse', count: 20 },
        { label: 'Cantaloupe', count: 30 },
        { label: 'Dijkstra', count: 40 }
    ];
};

machineStatus.drilledState = function(label){
    var data = [4, 8, 15, 16, 23, 42];
    switch(label) {
        case 'Abulia':
            data = [4, 8, 15, 16, 23, 42];
            break;
        case 'Betelgeuse':
            data = [14, 8, 25, 16, 23, 42];
            break;
        case 'Cantaloupe':
            data = [24, 8, 45, 16, 28, 42];
            break;
        case 'Dijkstra':
            data = [64, 38, 25, 16, 23, 42];
            break;
        default:
            data = [4, 8, 15, 16, 23, 42];
    }
    return data;
}