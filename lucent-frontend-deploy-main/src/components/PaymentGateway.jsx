import React from 'react'
import SectionHead from './SectionHead'
import Image from '../Images/payment-gateway.webp'

const PaymentGateway = () => {
  return (
    <section className="payment-gateway">
        <div className="container payment-gateway-container">
          <SectionHead title="Payment Gateway" className='payment-gateway-head'/>
          <h2>The Best <span> Solution </span> For Accepting Online Global Payments</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero voluptatem ipsa excepturi rerum officia. Dignissimos?
          </p>          
          <div className="payment-gateway-image">
            <img src={Image} alt="Image" />
          </div>
        </div>
    </section>
  )
}

export default PaymentGateway