import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App';
//import ResizeObserver from '../../__mocks__/ResizeObserver';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  //var origResizeObserver = global.ResizeObserver;

  beforeAll(() => {
    //global.ResizeObserver = require('resize-observer-polyfill');
  });

  afterAll(() => {
    //global.ResizeObserver = origResizeObserver;
  });

  test('should render app title', async() => {
    // Arrange
    render(<App />);
    
    // Act
    await screen.getByTestId('app-title'); //(/Bill Tracker App/i);
    //expect(linkElement).toBeInTheDocument();
   
    // Assert
    expect(screen.getByTestId('app-title')).toHaveTextContent(/Bill Tracker App/i);

    // const { getByText } = render(<App />);
    // const elem = getByText(/Bill Tracker App/i);
    // expect(elem).not.toBeNull();  //.toBeInTheDocument();
  });

});
