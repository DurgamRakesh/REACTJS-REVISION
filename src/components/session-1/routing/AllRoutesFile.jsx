import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './styes.css';
import Home from './Home';
import About from './About';
import Student from './Student';
import PageError from './PageError';
import Users from './Users';
import UserDeatils from './UserDeatils';

const AllRoutesFile = () => {
  return (
    <BrowserRouter>
    <div>
        <div className='nav' >
            <ul>
                <li><NavLink to='/' activeclassname={'active'}>Home</NavLink></li>
                <li><NavLink to='/student'activeclassname={'active'}>Student</NavLink></li>
                <li><NavLink to='/about' activeclassname={'active'}>About</NavLink></li>
                <li><NavLink to='/users' activeclassname={'active'}>Users</NavLink></li>
            </ul>
        </div>
    </div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userid' element={<UserDeatils/>}/>
        <Route path='*' element={<PageError/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutesFile