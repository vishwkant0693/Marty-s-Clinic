import React from 'react'

const Home = () => {
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="../images/1.png" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Marty's Clinic</h1>
            <p class="mb-8 leading-relaxed">Your Gateway to Modern Healthcare. Experience compassionate care enhanced by cutting-edge technology. Book appointments, manage your health records, and connect with our dedicated team seamlessly through our intuitive MERN Stack platform. Your well-being is our priority, and we're here to empower you on your health journey. Discover a new standard of healthcare excellence at Marty's Clinic today.</p>
            <div class="flex justify-center">
              <a class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="/appointment" >Book an Appointment</a>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
              <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="../images/3.png" />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-white font-medium title-font mb-2">Marty's Clinic</h2>
                <p class="leading-relaxed">Highlight Marty's Clinic's dedication to providing compassionate and high-quality healthcare services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Explore Marty's Clinic's statistics and discover the impact of our commitment to excellence in healthcare. </h1>
              <div class="leading-relaxed">Our data reflects our dedication to providing high-quality, patient-centered care. From patient satisfaction rates to treatment outcomes, our statistics showcase our continuous efforts to improve health outcomes and enhance patient experiences. Join us in celebrating our achievements and milestones as we strive to set new standards in healthcare delivery. Trust the numbers, trust Marty's Clinic, where your well-being is our priority.</div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">27K</h2>
              <p class="leading-relaxed">Treated Patients</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">1K</h2>
              <p class="leading-relaxed">Active Patients</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">24/7</h2>
              <p class="leading-relaxed">Availibility</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Doctors</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src="../images/4.png" alt="stats" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home