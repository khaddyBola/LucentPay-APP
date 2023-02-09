import React from 'react';
import { payment } from '../data';
import Card from '../UI/Card'
import SectionHead from './SectionHead';

const Ecosystem = () => {
    return (
        <section className='ecosystem'>
            <div className="container ecosystem-container">
            <SectionHead title="Ecosystem" className="ecosystem-head"/>
            <h2>Payment <span>Ecosystem</span></h2>
            <p>
                Officia dignissimos incidunt nisi ipsam minima dolore.
                Animi facilis exercitationem quam, perspiciatis illum
                ipsum dolorem corrupti nisi necessitatibus impedit ea 
                consequatur hic!Lorem ipsum dolor sit.
            </p>

            <div className='ecosystem-wrapper'>
                {
                    payment.map(({icon, title, info, id}) => {
                        return (
                            <Card key={id} className='ecosystem-card'>
                                <div className="ecosystem-card-img-container">
                                    <img src={icon} alt="image" />
                                </div>
                                <h4>{title}</h4>
                                <small>{info}</small>
                            </Card>
                        )
                    })
                }
            </div>

            </div>
        </section>
    )
}


export default Ecosystem;