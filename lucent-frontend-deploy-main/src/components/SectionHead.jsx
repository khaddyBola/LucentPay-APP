import React from 'react'

const SectionHead = ({title, className}) => {
  return (
    <div className={`section-head ${className}`}>
        <h5>{title}</h5>
    </div>
  )
}

export default SectionHead