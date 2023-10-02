import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import { resolve } from 'node:path/win32';
import React from 'react';
import GraphMenu from '../client/components/GraphMenu';


describe('', () => {
  const mockName = jest.fn();
  const mockUrl = jest.fn();
  beforeEach(() => {
    render(<GraphMenu name='Messages In' setName={mockName} setUrl={mockUrl} />);
  });
  afterEach(cleanup);
  it('should call setName and setUrl when a menu item has been clicked', async () => {

    const block = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('i am the blocker in the timeout')
        }, 3000)
      })
    }


    fireEvent.click(screen.getByText(/^Messages In$/));
    const backlog = screen.getByText('Backlog');
    // console.log('backlog', backlog)
    fireEvent.click(backlog);
    expect(mockName).toHaveBeenCalledTimes(1);
    expect(mockUrl).toHaveBeenCalledTimes(1);
    // setTimeout(() => {
    //   screen.debug();
    // }, 2000)
    // const beingBlocked = await block();
    // console.log(beingBlocked)
    // const menu = document.querySelector('#fade-button');
    // expect(menu).toHaveTextContent('Backlog');
    screen.debug();
    // expect(screen.queryByText(/^Messages In$/)).not.toBeInTheDocument()
    
  });
  
})