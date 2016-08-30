var express = require('express');
var attendees = require('../models/Attendees');

var router = express.Router();

/* GET Attendees listing. */
router.get('/', function(req, res, next) {
	res.json();
});

/* POST new attendees listing */
router.post('/',function(req,res,next){
	console.log("Test");
	console.log(req.body);
	var attendees_object = {
		ticketNumber:req.body.ticketNumber,
		fullName:req.body.fullName,
		mobile:req.body.mobile,
		email:req.body.email,
		location:req.body.location,
	    gender:req.body.gender,
	    source:req.body.source,
	};
	console.log(attendees_object);
	attendees.create(attendees_object,function(err,data){
		if(err)
			res.json({"error":"Check all the fields again"});
		else {
		res.json({"success":"Data saved. Make sure there is manual entry"});
	}
	})
	
})

router.get('/show/:id',function(req,res){
	res.json({});
});





module.exports = router;