import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {AiOutlineInfoCircle} from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className='navbar-content'>
      <a href='http://localhost:7080'><AiOutlineHome id='home-button' className='nav-buttons' size={40}/></a>
      <a><FiSettings size={30} className='nav-buttons'/></a>
      <a><AiOutlineInfoCircle size={35} className='nav-buttons'/></a>
    </div>
  )
}
