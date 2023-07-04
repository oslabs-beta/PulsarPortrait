import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {AiOutlineInfoCircle} from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className='navbar'>
      <a href='http://localhost:7080'><AiOutlineHome id='HomeButton' className='NavButtons' size={35}/></a>
      <a><FiSettings size={30} className='NavButtons'/></a>
      <a><AiOutlineInfoCircle size={35} className='NavButtons'/></a>
    </div>
  )
}
