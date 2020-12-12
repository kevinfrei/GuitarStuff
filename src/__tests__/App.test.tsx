import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders', () => {
  render(<App />);
  /*
  screen is from @testing-library/react
  const linkElement = screen.getByText(/a sample/i);
  expect(linkElement).toBeInTheDocument();
  */
});
