import React from 'react'
import { partners } from '../data'
import SectionHead from './SectionHead'

const Partners = () => {
  return (
    <section className="partners">
        <div className="container partners-container">
        <SectionHead title="Our Partners"/>
            <div className="partners-wrappers">
                {
                    partners.map(({id, logo}) => {
                        return (
                            <img src={logo} alt="logo" className='partners-logos' key={id} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Partners