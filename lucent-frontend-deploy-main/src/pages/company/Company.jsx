import React from 'react'
import './company.css'
import PagesHeader from '../../components/PagesHeader'
import { companyTeam } from '../../data'
import Card from '../../UI/Card'
import { company } from '../../data'
import SectionHead from '../../components/SectionHead'
import Image from '../../Images/team.jpeg'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'

const Company = () => {
  return (
    <>
      <Navbar/>
      <section className='company'>
        <PagesHeader title='Company' page='Company' />
        <div className="container company-container">
          <SectionHead title="About" className="company-head"/>
          <h2><span>Who</span> We Are?</h2>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br />
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <div className='company-image-container'>
            <img src={Image} alt='team'/>
          </div>

          <div className="company-wrapper">
          {
            company.map(({icon, title, info, id}) => {
            return (
            <Card key={id} className='company-card'>
              <img src={icon} alt="icon"/>
              <h4>{title}</h4>
              <small>{info}</small>
            </Card>
            )
            })
          }
        </div>
        </div>
      </section>

      <section className="company-team">
        <div className="container company-team-container">
          <SectionHead title="Team" className="company-team-head"/>
          <h2>Meet The <span>Team</span> Behind LucentPay</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo facere odio maxime quisquam quis vero nobis non ab nulla deleniti.
          </p>

          <div className="company-team-wrapper">
            {
              companyTeam.map(({id, picture, name, position, facebook, twitter, linkedin}) => {
                return (
                  <Card key={id} className="company-team-card">
                    <div className="company-team-card-image-conatiner">
                      <img src={picture} alt="image" />
                    </div>
                    <h5>{name}</h5>
                    <small>{position}</small>
                    <div className="company-team-socials">
                      <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">{facebook}</a>
                      <a href="https://web.twitter.com/" target="_blank" rel="noopener noreferrer">{twitter}</a>
                      <a href="https://web.linkedin.com/" target="_blank" rel="noopener noreferrer">{linkedin}</a>
                    </div>
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

export default Company