import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>About
      <Link to='/about/help'>Help</Link>
      <Link to='/about/cus'>Cus</Link>
    </div>
  )
}

export default About