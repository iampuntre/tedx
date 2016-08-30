var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Attendees = new Schema({
	ticketNumber:String,
	fullName:String,
	mobile:String,
	email:String,
	location:String,
    gender:String,
    eventYear: {type:String,default:'2016'},
    dob: {type:Date},
    source:String,
    profession:String,
    designation:String,
    arrivalTime:{type:Date},
    present:Boolean
},{
	timestamps:true
});

module.exports = mongoose.model('Attendees', Attendees);
