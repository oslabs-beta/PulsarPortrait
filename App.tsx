import React from 'react';
import Body from './client/components/Body';
import Navbar from './client/components/Navbar';
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// async function getTopics() {
//   const result = await fetch(
//     'http://localhost:8080/admin/v2/persistent/public/default',
//     {
//       mode: 'no-cors',
//     }
//   );
//   console.log(result);
// }
// getTopics();
async function getTopics() {
  const response = await fetch(
    'http://localhost:8080/admin/v2/persistent/public/default',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    console.log('Error retrieving topics:', response.status, errorMessage);
    return;
  }

  const data = await response.json();
  const topics = data.topics;

  console.log('Topics:', topics);
}

getTopics();

const App = () => {
  return (
    <div className='AppDisplay'>
      <div className='Navbar'>
        {' '}
        <Navbar />{' '}
      </div>
      <div className='Body'>
        {' '}
        <Body />{' '}
      </div>
    </div>
  );
};

export default App;
