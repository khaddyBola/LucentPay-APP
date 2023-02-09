import React, { useState } from 'react'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import {testimonials} from '../data'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const {id, name, quote, job, avatar} = testimonials[index]

  const prevTestimonialHandler = () => {
    setIndex(prev => prev - 1)

    if (index <= 0) {
      return setIndex(testimonials.length - 1)
    }
  }

  const nextTestimonialHandler = () => {
    setIndex(prev => prev + 1)

    if(index >= testimonials.length - 1) {
      return setIndex(0)
    }
  }

  return (
    <section className="testimonials">
        <div className="container testimonials-container">
          <SectionHead title="Testimonials" className="testimonial-head"/>
          <h2>What They <span>Say</span> About LucentPay</h2>
          <div className="testimonials-wrapper">
            <Card key={id} className="testimonial">
              <div className="testimonial-avatar">
                <img src={avatar} alt={name} />
              </div>
              <div>
              <p className='testimonial-quote'>{`"${quote}"`}</p>
              <h4>{name}</h4>
              <small className="testimonial-title">{job}</small>
              </div>
            </Card>
            <div className="testimonials-btn-container">
              <button className="testimonials-btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
              <button className="testimonials-btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Testimonials