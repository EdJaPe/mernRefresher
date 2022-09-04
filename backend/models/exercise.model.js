// Require mongoose to use it as a variable
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//set up the details of the exerciseSchema
const exerciseSchema = new Schema({
  username:{ type: String, required: true },
  description: { type: String, required: true },
  duration:{ type: Number, required: true },
  date: {type: Date, required: true },
}, {
  timestamp: true,
});


//here we create a constant for the schema we create
const Exercise = mongoose. model('Exercise', exerciseSchema);

//this line is for the exporting the Exercise schema
module.exports = Exercise;