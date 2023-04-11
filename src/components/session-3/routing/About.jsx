import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>About
        <Link to={'/about/blog'}>Blog</Link>
        <Link to={'/about/todo'}>ToDo</Link>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default About