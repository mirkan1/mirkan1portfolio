import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('if the copyright is for latest year', () => {
  const currentYear = new Date().getFullYear().toString()
  const { getByText } = render(<App />);
  const linkElement = getByText(currentYear, { exact: false }); 
  expect(linkElement).toBeInTheDocument();
});
