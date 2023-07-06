import React from 'react'
import Body from './client/components/Body'
import Navbar from './client/components/Navbar'
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }



const App = () => {
  return (
    <div className='AppDisplay'>
      
       <div className='Navbar'> <Navbar /> </div>
       <div className='Body'> <Body /> </div> 
    </div>
  )
}

export default App