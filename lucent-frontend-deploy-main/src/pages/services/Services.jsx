import React from 'react'
import './services.css'
import PagesHeader from '../../components/PagesHeader'
import Ecosystem from '../../components/Ecosystem'
import PaymentGateway from '../../components/PaymentGateway'
import Benefits from '../../components/Benefits'
import Testimonials from '../../components/Testimonials'
import Image from '../../Images/service.png'
import SectionHead from '../../components/SectionHead'
import { service } from '../../data'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'

const Services = () => {
  return (
    <>
      <Navbar/>
      <PagesHeader title='Service' page='Service' />
      <Ecosystem/>
      <Benefits/>
      <PaymentGateway/>
      <section className='service'>
        <div className="container service-container">
            <div className="service-container-left">
              <img src={Image} alt="Image" />
            </div>
            <div className="service-container-right">
              <SectionHead title="E-Wallet"/>
              <h2>Transaction Covenience In One Hand</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum tenetur reiciendis? Quas, sed earum?
              </p>
              <div className="service-wrapper">
                {
                  service.map(({id, icon, info}) => {
                    return (
                      <ul key={id} className='service-list-container'>
                        <li className='service-list'>{icon}{info}</li>
                      </ul>
                    )
                  })
                }
              </div>
            </div>
        </div>
      </section>
      <Testimonials/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Services