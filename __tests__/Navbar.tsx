import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
// component
import Navbar from '../client/components/Navbar'

describe('Navbar Unit Test', () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  afterEach(cleanup);
  it ('should have three buttons', async () => {
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].textContent).toBe('Home');
    expect(buttons[1].textContent).toBe('Settings');
    expect(buttons[2].textContent).toBe('About');
  })
  it ('The home button should link to home', () => {
    const home = screen.getByText('Home');
    expect((home as HTMLAnchorElement).href).toBe('http://localhost:3333/');
  })
})