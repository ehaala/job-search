var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    location: {type: String, required: true},
    company: String,
    title: String,
    keyWord: String,
    meta: {
        contactPerson: String,
        contactEmail: String,

    }
  

});

var Job = mongoose.model('Job', jobSchema);

module.exports = Job;