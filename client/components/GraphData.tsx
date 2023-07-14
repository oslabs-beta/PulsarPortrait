import React from 'react';

export default function GraphData() {
  const graphData = {
    messagesIn:
      'http://localhost:2222/d/c2ef0e4a-da28-4797-bd86-5c1957aa9039/newmessagesin?orgId=1&refresh=5s&viewPanel=1&viewPanel=1&kiosk',
    messagesOut:
      'http://localhost:2222/d/b7cc76a7-51f0-4175-bbbc-dada7ec3fa2d/messagesout?orgId=1&refresh=5s&viewPanel=1&kiosk',
    backlog:
      'http://localhost:2222/d/d20d409b-6974-4ca4-b16c-fc74c6aa7cd1/newbacklog?orgId=1&refresh=5s&viewPanel=1&kiosk',
    activeConnections:
      'http://localhost:2222/d/ebc6aadf-fb78-435f-bd26-5a0e3743c9d5/active-connections?orgId=1&refresh=5s&viewPanel=1&kiosk',
    memoryUsage:
      'http://localhost:2222/d/a6f621d3-bb3c-4569-8315-2e0c4b2de35b/new-dashboard?orgId=1&refresh=5s&from=1689336334022&to=1689357934022&viewPanel=1&kiosk',
    messageRate:
      'http://localhost:2222/d/d79b197c-2abe-4e1b-b16e-0fa10b0656a4/test?orgId=1&refresh=5s&from=1689350706498&to=1689372306498&viewPanel=1&kiosk',
    topicsAndSubscriptions:
      'http://localhost:2222/d/c8268214-d094-46d5-9a25-7cce1192ae69/topicsandsubscriptions?orgId=1&refresh=5s&viewPanel=1&kiosk',
    jettyrequesttime:
      'http://localhost:2222/d/e11221ec-7d82-47ec-a3b1-5356e4f63c6b/jettyrequesttime?orgId=1&refresh=5s&viewPanel=1&kiosk',
  };
  return { graphData };
}

// import { right } from '@popperjs/core';
// import React from 'react';

// export default function Graph4() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ width: '50%', float: 'left', padding: '10px' }}>
//         <iframe
//           className='chart'
//           src='http://localhost:3000/d/ebc6aadf-fb78-435f-bd26-5a0e3743c9d5/active-connections?orgId=1&refresh=5s&viewPanel=1&kiosk'
//           frameBorder='0'
//         ></iframe>
//       </div>
//       <div style={{ width: '50%', float: 'right', padding: '10px' }}>
//         <iframe
//           className='chart'
//           src='http://localhost:3000/d/ec981016-898e-462f-9a23-cb9384c5e5c3/memory-usage?orgId=1&refresh=5&viewPanel=1&kiosk'
//           frameBorder='0'
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default function Graph5() {
//   return (
//     <div>
//       <iframe
//         className='chart'
//         src='http://localhost:3000/d/e45ef206-3f60-4226-95bc-c0107f6c90f7/message-rate-graph?orgId=1&refresh=5s&from=1689002117576&to=1689023717576&viewPanel=1&kiosk'
//         frameBorder='0'
//       ></iframe>
//     </div>
//   );
// }
