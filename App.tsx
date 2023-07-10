import React, { useEffect } from 'react'
import Body from './client/components/Body'
import Navbar from './client/components/Navbar'
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }



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
       <div className='Navbar'> <Navbar /> </div>
       <div className='Body'> <Body /> </div> 
    </div>
  )
}

export default App