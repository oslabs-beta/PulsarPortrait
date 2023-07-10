import React from 'react'
import GraphMenu from './GraphMenu'
import { useState } from 'react';

export default function Graph1() {
  const [ url, setUrl ] = useState<string>("http://localhost:3000/d/c2ef0e4a-da28-4797-bd86-5c1957aa9039/newmessagesin?orgId=1&refresh=5s&viewPanel=1&viewPanel=1&kiosk")
  const [ name, setName ] = useState<string>("messages_in");
  
  return (

    <div id='graph-container1'>
      <GraphMenu name={name} setUrl={setUrl} setName={setName}/>    
      <iframe className='chart' src={url} frameBorder='0'></iframe>
    </div>
  )
}
{/* <iframe className='chart'src="http://localhost:3000/d/f849b578-124a-4e19-a781-12d838580e64/messagein?orgId=1&refresh=5s&viewPanel=1&kiosk"  frameBorder="0" ></iframe> */}