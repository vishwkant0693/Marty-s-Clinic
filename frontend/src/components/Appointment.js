import React, { useState, useContext } from 'react'
import AppointContext from '../context/Appointments/AppointContext';

const Appointment = () => {

    const context = useContext(AppointContext);
    const { addAppointment } = context;

    const [appoint, setAppoint] = useState({ name: "", age: "", sex: "", doctor: "", symptoms: "" })

    const onChange = (e) => {
        setAppoint({ ...appoint, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        addAppointment(appoint.name, appoint.age, appoint.sex, appoint.doctor, appoint.symptoms);
        setAppoint({ name: "", age: "", sex: "", doctor: "", symptoms: "" })
        console.log("Appointment Added Successfully !!", "Success : ")
    }

    return (
        <>
            {/* <div className="d-flex justify-content-center w-100">
                <div className="pt-5">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="fullname" className="form-control" id="name" name="name" value={appoint.name} onChange={onChange} placeholder="Full name" />
                        </div>
                        <div className="d-flex mb-3">
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Age</label>
                                <input type="age" className="form-control"  id="age" name="age" value={appoint.age} onChange={onChange} />
                            </div>
                            <div className="">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Sex</label>
                                <select className="form-select" aria-label="Default select example"  id="sex" name="sex" value={appoint.sex} onChange={onChange}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Doctor</label>
                            <input type="doctor" className="form-control"  id="doctor" name="doctor" value={appoint.doctor} onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Symptoms</label>
                            <textarea className="form-control" rows="3"  id="symptoms" name="symptoms" value={appoint.symptoms} onChange={onChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                </div>
            </div> */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-white">Book an Appointment</h1>
                        <p class="leading-relaxed mt-4">Schedule your appointment with Marty's Clinic today and take the first step towards optimal health and well-being. Our expert healthcare professionals are ready to provide personalized care tailored to your needs. Whether you require a routine check-up, specialized treatment, or medical consultation, we offer convenient booking options to fit your schedule. Experience compassionate care and comprehensive medical services in a welcoming environment. Don't delay - prioritize your health and book your appointment with Marty's Clinic now.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-lg font-medium title-font mb-5">Appointment</h2>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-400">Full Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={appoint.name} onChange={onChange} placeholder="Full name" />
                        </div>
                        <div className="flex gap-5">
                            <div class="relative mb-4">
                                <label for="age" class="leading-7 text-sm text-gray-400">Age</label>
                                <input type="age" id="age" name="age" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={appoint.age} onChange={onChange} placeholder="Age" />
                            </div>
                            <div class="relative mb-4">
                                <label for="sex" class="leading-7 text-sm text-gray-400">Sex</label>
                                <select type="sex" id="sex" name="sex" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-2 px-1 leading-8 transition-colors duration-200 ease-in-out" value={appoint.sex} onChange={onChange} placeholder="Sex">
                                    <option value="Male" className='text-black'>Male</option>
                                    <option value="Female" className='text-black'>Female</option>
                                    <option value="Others" className='text-black'>Others</option>
                                </select>
                            </div>
                        </div>
                        <div class="relative mb-4">
                            <label for="doctor" class="leading-7 text-sm text-gray-400">Doctor</label>
                            <input type="doctor" id="doctor" name="doctor" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={appoint.doctor} onChange={onChange} placeholder="Doctor" />
                        </div>
                        <div class="relative mb-4">
                            <label for="symptoms" class="leading-7 text-sm text-gray-400">Symptoms</label>
                            <input type="symptoms" id="symptoms" name="symptoms" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={appoint.symptoms} onChange={onChange} placeholder="Symptoms" />
                        </div>
                        <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Book an Appointnent</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointment