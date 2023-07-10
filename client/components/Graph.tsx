import React from 'react'
import GraphMenu from './GraphMenu'
import { useState } from 'react';

export default function Graph1({ name, setName, url, setUrl }) {


  return (

    <div id='graph-container1'>
      <GraphMenu name={name} setUrl={setUrl} setName={setName} url={url} />
      <iframe className='chart' src={url} frameBorder='0'></iframe>
    </div>
  )
}
{/* <iframe className='chart'src="http://localhost:3000/d/f849b578-124a-4e19-a781-12d838580e64/messagein?orgId=1&refresh=5s&viewPanel=1&kiosk"  frameBorder="0" ></iframe> */ }