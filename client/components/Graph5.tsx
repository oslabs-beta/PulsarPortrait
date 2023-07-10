import React from 'react';

export default function Graph5() {
  return (
    <div>
      <iframe
        className='chart'
        src='http://localhost:3000/d/e45ef206-3f60-4226-95bc-c0107f6c90f7/message-rate-graph?orgId=1&refresh=5s&from=1689002117576&to=1689023717576&viewPanel=1&kiosk'
        frameBorder='0'
      ></iframe>
    </div>
  );
}
