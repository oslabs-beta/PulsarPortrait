import React from 'react'
import GraphMenu from './GraphMenu'
import { useState } from 'react';
import GraphData from './GraphData';

export default function Graph({ index }) {
  const result = GraphData()
  const data = result.graphData

  const graphDataArray = [data['messagesIn'], data['messagesOut'], data['backlog'], data['activeConnections'], data['memoryUsage']]

  const [name, setName] = useState<string>('messagesIn');
  const [url, setUrl] = useState<string>(graphDataArray[index])

  return (

    <div id='graph-container1'>
      <GraphMenu name={name} setUrl={setUrl} setName={setName} url={url} />
      <iframe className='chart' src={url} frameBorder='0'></iframe>
    </div>
  )
}
{/* <iframe className='chart'src="http://localhost:3000/d/f849b578-124a-4e19-a781-12d838580e64/messagein?orgId=1&refresh=5s&viewPanel=1&kiosk"  frameBorder="0" ></iframe> */ }