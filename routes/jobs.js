var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();




/* GET animals listing. */
router.get('/', function(req, res, next) {

  Job.find({}, function(err, jobs) {//must be w/in a GET/POST/etc route
      if(err)return console.log(err);
      res.send(jobs);
  });
 });



module.exports = router;
