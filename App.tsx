import React, { useEffect } from 'react';
import Display from './client/components/Display';
import Navbar from './client/components/Navbar';

const App = () => {
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
