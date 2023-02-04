import React from 'react'

const Footer = ({text}) => {
  return (
    <header> 
        <h1>{text}</h1>
    </header>
  )
}
Footer.defaultProps = {
    text: 'Hello Welcome!'
}

export default Footer