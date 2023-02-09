import React from 'react'
import './notFound.css'
import Button from '../../components/Buttons/Button'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'

const NotFound = () => {
  return (
    <>
      <Navbar/>
      <section className='not-found'>
        
        <div className="container not-found-container">
          <h2>404</h2>
          <h5>Oops! Page Not Found</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit minima rerum repellendus corrupti, omnis aperiam.
          </p>

          <div className="sm-div2">
            <Button to='/' name="Back To Home" className="not-fund-btn"/>
          </div>
          
        </div>
      </section>
      <Download/>
      <Footer/>
    </>
  )
}

export default NotFound