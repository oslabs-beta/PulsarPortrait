import React from 'react'
import Graph1 from './Graph1'
import Graph2 from './Graph2'
import Graph3 from './Graph3'
import Graph4 from './Graph4'

export default function Display() {
  return (
    <div className='DisplayContainer'>
    <div id='Graph1' className='Graph'><Graph1/></div>
    <div id='Graph2' className='Graph'><Graph2/></div>
    <div id='Graph3' className='Graph'><Graph3/></div>
    {/* <div id='Graph4' className='Graph'><Graph4/></div> */}
    </div>
  )
}
