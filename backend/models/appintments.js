const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String
    },
    doctor: {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
  });


const Appointments = mongoose.model('Appointments', appointmentSchema);
module.exports = Appointments;