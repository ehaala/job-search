var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/job');
var router = express.Router();




/* GET animals listing. */
router.get('/', function(req, res, next) {

  Job.create({ //added to test databasae, not needed for functional app
    location: 'Seattle',
    company: 'General Assembly',
    title: 'Web Developer',
    meta: {
      contactPerson: 'Boris Grishenko',
      contactEmail: 'Boris@bondvillainsurvivors.com'
    }
    }, function(err, job) {
      if(err) return console.log(err)
      res.send(job)
  })

  Job.find({}, function(err, jobs) {//must be w/in a GET/POST/etc route
      if(err)return console.log(err);
      res.send(jobs);
  });
 });



module.exports = router;
