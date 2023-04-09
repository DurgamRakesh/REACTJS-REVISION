import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <div>Projects
        <Link style={{margin:'100px'}} to={'/projects/blog'}>Blog</Link>
        <Link style={{margin:'100px'}} to={'/projects/todo'}>ToDo</Link>
        <div style={{border:"2px solid black",display:"flex",marginTop:"200px"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Projects