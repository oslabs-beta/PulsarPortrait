import React from 'react';
import Display from './client/components/Display';
import Navbar from './client/components/Navbar';

const App = () => {
  return (
    <>
      <h1 id='heading'>PulsarPortrait</h1>
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
    </>
  );
};

export default App;
