import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import SectionHead from '../../components/SectionHead'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {FaRegAddressCard, FaPhoneAlt} from 'react-icons/fa'
import './contacts.css'
import ContactsForm from '../../components/Forms/ContactsForm'
import { DisplayMapFC } from '../../components/Map'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'

const Contacts = () => {
  return (
    <>
      <Navbar/>
      <section className='contacts'>
        <PagesHeader title="Contact Us" page="Contact Us" />
        <div className="container contacts-container">
          <div className="contacts-container-left">
            <SectionHead title="Contacts"/>
            <h2>Get <span>In Touch</span> With Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Fuga molestias velit nihil perferendis sint ducimus assumenda nam, 
              blanditiis modi expedita.
            </p>
            <div className="contacts-container-inner">
              <a href="mailto:adesholatajudeen1@gmail.com" target="_blank" rel="noopener noreferrer">
                <HiOutlineMailOpen/><span>E-mail</span> <small>hello@lucentpay.com</small> 
              </a>
              <a href="tel:+2348145991080" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt/><span>Phone</span><small>+23481459910</small> 
              </a>
             
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaRegAddressCard/><span>Address</span> 
                <address>Victoria Tower 5997, Sidney Australia</address>
              </a>
            </div>
          </div>
          <div className="contacts-container-rigt">
            <ContactsForm/>
          </div>
        </div>
      </section>
      <section className='contacts-map'>
        <div className="container contacts-map-container">
          <DisplayMapFC/>
        </div>
      </section>
      <Download/>
      <Footer/>
    </>
  )
}

export default Contacts