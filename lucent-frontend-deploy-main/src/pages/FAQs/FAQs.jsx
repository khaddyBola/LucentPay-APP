import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import './faqs.css';
import SectionHead from '../../components/SectionHead';
import {faq} from '../../data';
import Card from '../../UI/Card';
import Navbar from '../../components/Navbar';
import Download from '../../components/Download';
import Footer from '../../components/Footer';

const FAQs = () => {
  return (
    <>
      <Navbar/>
      <section className='faqs'>
      <PagesHeader title="FAQs" page="FAQs"/>
        <div className="container faqs-container">
          <SectionHead title="FAQ" className="faq-head"/>
          <h2>Frequently <span>Asked</span> Questions</h2>
        
          <div className='faq-wrapper'>
                  {
                      faq.map(({question, answer, id}) => {
                          return (
                              <Card key={id} className='faq-card'>
                                  <h4>{question}</h4>
                                  <p>{answer}</p>
                              </Card>
                          )
                      })
                  }
              </div>
        </div>
      </section>
      <Download/>
      <Footer/>

    </>
  )
}

export default FAQs