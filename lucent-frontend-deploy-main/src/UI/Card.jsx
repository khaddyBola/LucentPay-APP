import React from 'react'

const Card = ({children, className}) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card