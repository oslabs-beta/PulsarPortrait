import React from 'react';
import GraphMenu from './GraphMenu';
import { useState } from 'react';
import GraphData from '../GraphData';
import { URLS } from '../types';

type GraphProps = {
  index: number;
}

export default function Graph({ index }: GraphProps) {
  const data: URLS = GraphData;

  const graphDataArray: string[] = [
    data['messagesIn'],
    data['messagesOut'],
    data['backlog'],
    data['activeConnections'],
    data['memoryUsage'],
    data['topicsAndSubscriptions'],
  ];
  const graphNameArray: string[] = [
    'Messages In',
    'Messages Out',
    'Backlog',
    'Producer/Consumer Count',
    'Memory Usage',
    'Topics and Subscriptions',
  ]

  const [name, setName] = useState<string>(graphNameArray[index]);
  const [url, setUrl] = useState<string>(graphDataArray[index]);

  return (
    <div className='graph-container'>
      <GraphMenu name={name} setUrl={setUrl} setName={setName} />
      <iframe className='chart' src={url} frameBorder='0'></iframe>
    </div>
  );
}
