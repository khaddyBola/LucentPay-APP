import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

const PagesHeader = ({title, page}) => {
  return (
    <header className='pages-header'>
        <div className="container pages-header-container">
            <div className="sm-div1">
                <h2>{title}</h2>
            </div>

            <div className='sm-div2'>
                <Link to="/">Home</Link>
                <MdKeyboardArrowRight/>
                <p>{page}</p>
            </div>
                   
            </div>
    </header>
  )
}

export default PagesHeader