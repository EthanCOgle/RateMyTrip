import React from 'react'

const Button = ({color, text}) => {
  return (
    <button style = {{backgroundColoor: color}} className = 'btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text:  'Hello'
}

export default Button