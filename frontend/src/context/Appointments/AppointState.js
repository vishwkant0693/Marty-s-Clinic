import React, { useState } from 'react'
import AppointContext from './AppointContext'

const AppointState = (props) => {
    const host = "http://localhost:5000"
    const appointInitial = [];
    const [appoint, setAppoint] = useState(appointInitial)

    // Fetch all appointments
    const fetchAllAppointments = async () => {

        const response = fetch(`${host}/api/appointment/fetch-all-appointments`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setAppoint(json);
    }


    // ADD APPOINTMENT
    const addAppointment = async (name, age, sex, doctor, symptoms) => {

        const response = fetch(`${host}/api/appointment/add-appointment`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            // -----------------------------Name==============Fullname
            body: JSON.stringify({name, age, sex, doctor, symptoms})  
        });
        const appointment = await response.json();

        setAppoint(appoint.concat(appointment));

    };


    // DELETE APPOINTMENT
    const deleteAppointment = async (id) => {

        const response = fetch(`${host}/api/appointment/delete-appointment/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);

        const newAppoint = appoint.filter((appoint)=>{
            return appoint._id !== id
        })

        setAppoint(newAppoint);
    };


    // UPDATE APPOINTMENT
    const updateAppointment = async (id, name, age, sex, doctor, symptoms) => {

        const response = fetch(`${host}/api/appointment/update-appointment/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body:JSON.stringify({name, age, sex, doctor, symptoms})
        });
        const json = await response.json();
        console.log(json);

        let newAppoint = JSON.parse(JSON.stringify(appoint));

        for (let index = 0; index < newAppoint.length; index++) {
            const element = newAppoint[index];
            if(element._id === id) {
                newAppoint[index].name = name;
                newAppoint[index].age = age;
                newAppoint[index].sex = sex;
                newAppoint[index].doctor = doctor;
                newAppoint[index].symptoms = symptoms;
                break;
            }
        }
        setAppoint(newAppoint);

    }


    return (
        <AppointContext.Provider value={{ appoint, addAppointment, deleteAppointment, updateAppointment, fetchAllAppointments }}>
          {props.children}
        </AppointContext.Provider>
      )
  
}

export default AppointState