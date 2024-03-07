import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Appointment from './components/Appointment';
import AppointState from './context/Appointments/AppointState';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';


function App() {

  return (
    <>
      <AppointState>
        <BrowserRouter>
          <Header />
          <div className="">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}/>
              <Route path='/appointment' element={<Appointment />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/services' element={<Services />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AppointState>
    </>
  );
}

export default App;
