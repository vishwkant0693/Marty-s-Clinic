import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [creds, setCreds] = useState({ name: "", email: "", password: "" })
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            history("/");
        }
        else {
            console.log("error");
        }

    }

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }


    return (
        <>
            {/* <div className="d-flex justify-content-center w-80">
                <div className="pt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="fullname" className="form-control" id="name" name="name" value={creds.name} onChange={onChange} placeholder="Full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={creds.email} onChange={onChange} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword5" className="form-label">Password</label>
                            <input type="password" id="password" name="password" className="form-control" aria-describedby="passwordHelpBlock" value={creds.password} onChange={onChange} />
                            <div id="passwordHelpBlock" className="form-text">
                                Your password must be 6-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </form>
                </div>
            </div> */}
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-white">Join Marty's Clinic and embark on a journey towards better health today! </h1>
                        <p class="leading-relaxed mt-4">Sign up to unlock exclusive access to our comprehensive healthcare services and resources. Experience personalized care, convenient appointment booking, and secure access to your medical information. Our user-friendly signup process ensures a hassle-free experience, so you can focus on what matters most - your health. Take the first step towards a healthier future and sign up with Marty's Clinic now..</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                        <form action="" onSubmit={handleSubmit}>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-400">Full Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={creds.name} onChange={onChange} placeholder="Full name" />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creds.email} onChange={onChange} placeholder="Email ID" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creds.password} onChange={onChange} placeholder="Password" />
                        </div>
                        <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup