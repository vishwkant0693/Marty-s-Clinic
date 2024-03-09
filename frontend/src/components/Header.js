import React from 'react'

const Header = () => {
    return (
        <>
            {/* <div className="">
                <nav className="">
                    <div className="container flex justify between px-4">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/appointment">Appointment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/login'>Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/signup'>Signup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/services'>Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span class="ml-3 text-xl">Marty's</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-bold">
                        <a class="mr-5 hover:text-gray-900" href="/" >Home</a>
                        <a class="mr-5 hover:text-gray-900" href="/about">About</a>
                        <a class="mr-5 hover:text-gray-900" href="/appointment">Book an Appointment</a>
                        <a class="mr-5 hover:text-gray-900" href='/services'>Services</a>
                        <a class="mr-5 hover:text-gray-900" href='/login'>Log in</a>
                    </nav>
                    <a class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" href='/signup'>Sign up</a>
                </div>
            </header>
        </>
    )
}

export default Header