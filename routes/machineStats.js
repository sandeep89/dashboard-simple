var express = require('express');
var router = express.Router();
var middleware = require("../middleware");
var machineStats = middleware.machineStats;

router.get('/', function (req, res, next) {
    res.send(machineStats.getInitialCondition());
});

router.get('/drilled', function (req, res, next) {
    var name = req.query ? req.query.label : 'Abulia';
    res.send(machineStats.getDrilledStats(name));
})

module.exports = router;
