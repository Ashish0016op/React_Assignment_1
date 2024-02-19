import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <div>
        <button onClick={onClick}>Click me</button>
        <p>{text}</p>
    </div>
  )
}

export default Button