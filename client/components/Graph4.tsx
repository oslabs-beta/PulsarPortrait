import { right } from '@popperjs/core';
import React from 'react';

export default function Graph4() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%', float: 'left', padding: '10px' }}>
        <iframe
          className='chart'
          src='http://localhost:3000/d/ebc6aadf-fb78-435f-bd26-5a0e3743c9d5/active-connections?orgId=1&refresh=5s&viewPanel=1&kiosk'
          frameBorder='0'
        ></iframe>
      </div>
      <div style={{ width: '50%', float: 'right', padding: '10px' }}>
        <iframe
          className='chart'
          src='http://localhost:3000/d/ec981016-898e-462f-9a23-cb9384c5e5c3/memory-usage?orgId=1&refresh=5&viewPanel=1&kiosk'
          frameBorder='0'
        ></iframe>
      </div>
    </div>
  );
}
