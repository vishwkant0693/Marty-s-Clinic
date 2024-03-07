const express = require('express');
const Appointments = require('../models/appintments')
const fetchuser = require('../middlewares/fetchuser')
const router = express.Router()
const { body, validationResult } = require('express-validator')




// Fetch All Appointments
router.get('/fetch-all-appointments', fetchuser, async (req, res) => {
    const appointments = await Appointments.find({ user: req.user.id });
    res.json(appointments);
})

router.post('/add-appointment', fetchuser, [
    body('name', 'Enter a valid name !!').notEmpty().isLength({ min: 4 }),
    body('age', 'Enter a valid age !!').notEmpty(),
    body('sex', 'Enter a valid sex !!').notEmpty(),
    body('doctor', "Doctor's name !!").notEmpty(),
    body('symptoms', 'Describe it properly !!').notEmpty().isLength({ min: 8 })
], async (req, res) => {
    try {
        const { name, age, sex, symptoms } = req.body
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const appointment = new Appointments({
            name, age, sex, doctor, symptoms, user: req.user.id
        })
        const saveAppoint = await appointment.save()
        res.json(saveAppoint)


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Add-Appointment Error Occured");
    }
})



router.put('/update-appointment/:id', fetchuser, async (req, res) => {
    try {
        const { name, age, sex, symptoms } = req.body;

        const newAppoint = {};
        if (name) {newAppoint.name = name};
        if (age) {newAppoint.age = age};
        if (sex) {newAppoint.sex = sex};
        if (doctor) {newAppoint.doctor = doctor};
        if (symptoms) {newAppoint.symptoms = symptoms};


        // finding appointment
        let appoint = await Appointments.findById(req.params.id);
        if (!appoint) { res.status(404).send("Not Found !!") }

        // appointment belongs to user
        if(appoint.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed !!")
        }
        appoint = await Appointments.findByIdAndUpdate(req.params.id, {$set: newAppoint}, {new: true})
        res.json({appoint});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Update-Appointment Error Occured");
    }
})


router.delete('/delete-appointment/:id', fetchuser, async (req, res) => {
    try {
        const { name, age, sex, symptoms } = req.body;
        
        let appoint = await Appointments.findById(req.params.id);
        if (!appoint) { res.status(404).send("Not Found !!") }

        if(appoint.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed !!")
        }

        appoint = await Appointments.findByIdAndDelete(req.params.id)
        res.json({"Deleted":"Appointment has been deleted",appoint:appoint});


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Delete-Appointment Error Occured");
    }
})



module.exports = router