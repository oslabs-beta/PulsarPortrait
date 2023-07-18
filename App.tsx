import React, { useEffect } from 'react';
import Display from './client/components/Display';
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


// const App = () => {
//   // const grafport: string | number = process.env.GRAFPORT ?? 2999;
//   // console.log(grafport);
//   // console.log('hello I am in app')
//   // (async function getGraf () {
//   //   console.log('in app.tsx')
//   //   const data = await fetch('/grafport');
//   //   const result = await data.text();
//   //   console.log(result)

//   // .then(data => {
//   //   console.log(data)
//   // });

//   // console.log(grafport.json())
//   // })();
//     (async function getGraf () {
//     console.log('in app.tsx')
//     const data = await fetch('http://localhost:8080/admin/v2/persistent/public/default', {
//       mode: 'no-cors'
//     })
//     const result = await data.text();
//     console.log('result', result)
    
//     // .then(data => {
//     //   console.log(data)
//     // });
    
//     // console.log(grafport.json())
//   })();
  // console.log('hello')
  return (
    <div className='app-display'>
      <div className='navbar'>
        {' '}
        <Navbar />{' '}
      </div>
      <div className='body'>
        {' '}
        <Display />{' '}
      </div>
    </div>
  );
};

export default App;
