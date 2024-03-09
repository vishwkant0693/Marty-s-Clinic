import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [creds, setCreds] = useState({ email: "", password: "" })
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: creds.email, password: creds.password })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            history("/")
            console.log("Logged in Successfully !!", "Success : ");
        }
        else {
            console.log("Error : ");
        }

    }

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-white">Welcome back to Marty's Clinic!</h1>
                        <p class="leading-relaxed mt-4">Sign in to access your personalized healthcare journey. With a secure login process, gain instant access to your medical records, appointment history, and communication with our healthcare professionals. Your well-being is our priority, and we're here to make your healthcare experience seamless and convenient. Log in now to stay connected and take control of your health with Marty's Clinic.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-white text-lg font-medium title-font mb-5">Log In</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creds.email} onChange={onChange} placeholder="Email ID" />
                            </div>
                            <div class="relative mb-4">
                                <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                                <input type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creds.password} onChange={onChange} placeholder="Password" />
                            </div>
                            <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login