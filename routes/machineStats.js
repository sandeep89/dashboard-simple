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
  //res.send('respond with a resource');
});

router.get('/drilled', function(req, res,next){

})
module.exports = router;
