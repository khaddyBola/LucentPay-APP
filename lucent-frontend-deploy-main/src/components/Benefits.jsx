import React from 'react';
import { benefit } from "../data";
import Card from '../UI/Card';
import Image from '../Images/benefits-image.png'
import SectionHead from './SectionHead';

const Benefits = () => {
    return (                    
            <section className='benefits'>
                <div className="container benefits-container">
                    <div className="benefit">
                        <SectionHead title="Benefits" className='benifits-head'/>
                        <h2> <span>Benefits</span> Of Using E-Wallet</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Itaque eius a debitis ullam voluptatibus cumque.
                        </p> 
                        <div className='benefits-wrapper'>
                            {
                                benefit.map(({icon, title, info, id}) => {
                                    return (
                                        <Card key={id} className='benefit-card'>
                                            <img src={icon} alt="icon"/>
                                            <h4>{title}</h4>
                                            <small>{info}</small>
                                        </Card>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className='benefits-image-container'>
                        <img src={Image} alt='Account History Image'/>
                    </div>

                </div>              
        </section>

    )
}

export default Benefits;