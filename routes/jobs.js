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

router.delete('Favorites', function(req, res, next) {
  let deleteId = req.params.id;
  Job.delete(
    {id: deleteId},
    (err, jobs) => {
      if (err) console.log("err in Job.delete", err)
      console.log(jobs);
      res.send(jobs);
    }
  )
})

module.exports = router;
