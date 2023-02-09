import React from 'react'
import PagesHeader from '../../components/PagesHeader'
import './pricing.css'
import { pricing } from '../../data';
import Card from '../../UI/Card';
import SectionHead from '../../components/SectionHead';
import Navbar from '../../components/Navbar';
import Download from '../../components/Download';
import Footer from '../../components/Footer';

const Pricing = () => {
  return (
    <>
      <Navbar/> 
      <section className='pricing'>
        <PagesHeader title='Pricing' page='Pricing' />
        <div className="container pricing-container">
          <SectionHead title="Pricing" className="pricing-head"/>
          <h2><span className='span'>Best</span> Pricing for Your Need</h2>
          <p>
            Officia dignissimos incidunt nisi ipsam minima dolore. <br />
            Animi facilis exercitationem quam, perspiciatis illum ipsum <br />
            dolorem corrupti nisi necessitatibus impedit ea 
            consequatur hic!Lorem ipsum dolor sit.
          </p>

          <div className='pricing-wrapper'>
              {
                pricing.map(({icon, name, title, button, icon2, id}) => {
                  return (
                    <Card key={id} className='pricing-card'>
                      <div className="pricing-card-img-container">
                        <big className='pricing-icon'>{icon}</big>
                      </div>

                      <h4>{name}</h4>
                      <h5>{title}</h5>
                      <small><span> $1 </span>/ transactions</small>
                      
                      <small>{icon2}Lorem ipsum dolor sit </small>
                      <small>{icon2}Lorem ipsum dolor sit </small>
                      <small>{icon2}Lorem ipsum dolor sit </small>
                      <small>{icon2}Lorem ipsum dolor sit </small>
                      <small>{icon2}Lorem ipsum dolor sit </small>

                      <button>{button}</button>
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

export default Pricing