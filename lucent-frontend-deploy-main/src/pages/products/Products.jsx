import React from 'react'
import './products.css'
import PagesHeader from '../../components/PagesHeader'
import Navbar from '../../components/Navbar'
import Download from '../../components/Download'
import Footer from '../../components/Footer'

const Products = () => {
  return (
    <>
      <Navbar/>
      <section className='products'>
        <PagesHeader title='Products' page='Products' />
        <div className="container products-container">
         <h1>Coming Soon!</h1>
        </div>
      </section>
      <Download/>
      <Footer/>
    </>
   
  )
}

export default Products