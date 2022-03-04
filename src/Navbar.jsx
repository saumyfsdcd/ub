import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <div>
        <Link className='anchor' to='/'>Home</Link>
        <Link  className='anchor'to='/about'>About</Link>
        <Link className='anchor'to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar