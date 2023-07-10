import React, { useEffect } from 'react';
import Body from './client/components/Body';
import Navbar from './client/components/Navbar';
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// async function getTopics() {
//   try{
//   const result = await fetch(
//     'http://localhost:8080/admin/v2/persistent/public/default',
//   );
//   if(!result.ok){
//     console.log("Error retrieving topics");
//     return
//   }
//   const data = await result.json();
//   const topics = data.topics;
//   console.log('Topics:', topics)
// }
// getTopics();
async function getTopics() {
  const response = await fetch(
    'http://localhost:8081/http://localhost:8080/admin/v2/persistent/public/default',
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
  // const grafport: string | number = process.env.GRAFPORT ?? 2999;
  // console.log(grafport);
  // console.log('hello I am in app')
  // (async function getGraf () {
  //   console.log('in app.tsx')
  //   const data = await fetch('/grafport');
  //   const result = await data.text();
  //   console.log(result)

  // .then(data => {
  //   console.log(data)
  // });

  // console.log(grafport.json())
  // })();
  // console.log('hello')
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
