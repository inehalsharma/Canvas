var express = require('express');
var router = express.Router();
const EDWCourses = require('./models/edw_courses');
const StudentDet = require('./models/student_details');
const Courses = require('./models/courses');
var kafka = require('./kafka/client');
var passport = require('passport');

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // console.log(req.body.email);
    // console.log(req.body.courseid);
    kafka.make_request("waitlist", req, function(err, result){
        if(err){
            console.log(err);
        }
        else{                
            console.log(result);
            res.send(result);
        }
    });
});

module.exports = router;