import React from 'react'
import Image from '../Images/download-app.png'
import SectionHead from './SectionHead'
import {BsApple} from 'react-icons/bs'
import {FaGooglePlay} from 'react-icons/fa'

const Download = () => {
  return (
    <section className='download'>
        <div className="container download-container">
            <div className="download-image-container">
                <img src={Image} alt="App Image" />
            </div>
            <div className="download-links-container">
                <SectionHead title="Download App"/>
                <h2>Download Now For Your Smartphone</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Recusandae id eligendi quisquam ducimus, vero nobis!
                </p>
                <div className="download-link">
                    <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                        <button className='download-link-btn'>
                            <FaGooglePlay/>Get It On Google Play
                        </button>
                    </a>
                    <a href="http://www.apple.com" target="_blank" rel="noopener noreferrer">
                        <button className='download-link-btn'>
                            <BsApple/>Download on Google Play
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download