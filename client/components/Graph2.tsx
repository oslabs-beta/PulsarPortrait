import React from 'react'
import GraphMenu from './GraphMenu';
import { useState } from 'react';

export default function Graph2() {
  const [ url, setUrl ] = useState<string>("http://localhost:3000/d/b7cc76a7-51f0-4175-bbbc-dada7ec3fa2d/messagesout?orgId=1&refresh=5s&viewPanel=1&kiosk");
  const [ name, setName ] = useState<string>("messages_out");

  return (
    <div id='graph-container2'>
        <GraphMenu name={name} setName={setName} setUrl={setUrl}/>   
        <iframe className='chart' src={url} frameBorder='0'></iframe>
    </div>
  )
}
