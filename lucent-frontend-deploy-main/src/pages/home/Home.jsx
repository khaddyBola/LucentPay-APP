import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Partners from '../../components/Partners'
import Ecosystem from '../../components/Ecosystem'
import Benefits from '../../components/Benefits'
import PaymentGateway from '../../components/PaymentGateway'
import Testimonials from '../../components/Testimonials'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <MainHeader/>
      <Partners/>
      <Ecosystem/>
      <Benefits/>
      <PaymentGateway/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Home