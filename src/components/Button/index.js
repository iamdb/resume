import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'

const Button = ({ children, style }) => (
  <div className="Button" style={ style }>
    { children }
  </div>
)

export default Button
