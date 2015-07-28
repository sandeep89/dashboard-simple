var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var dataset = [
        { label: 'Abulia', count: 10 },
        { label: 'Betelgeuse', count: 20 },
        { label: 'Cantaloupe', count: 30 },
        { label: 'Dijkstra', count: 40 }
    ];
    res.send(dataset);
});

router.get('/drilled', function(req, res,next){
   var name = req.query ? req.query.label : 'Abulia';
    var responseData = [4, 8, 15, 16, 23, 42];
    console.log(responseData);
    switch(name) {
        case 'Abulia':
            responseData = [4, 8, 15, 16, 23, 42];
            break;
        case 'Betelgeuse':
            responseData = [14, 8, 25, 16, 23, 42];
            break;
        case 'Cantaloupe':
            responseData = [24, 8, 45, 16, 28, 42];
            break;
        case 'Dijkstra':
            responseData = [64, 38, 25, 16, 23, 42];
            break;
        default:
            responseData = [4, 8, 15, 16, 23, 42];
    }
    res.send(responseData);
})
module.exports = router;
