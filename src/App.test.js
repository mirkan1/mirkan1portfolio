import React from 'react';
import { render, screen } from '@testing-library/react';
//import App from './App';
import Work from './pages/Work';

test('if I have at least one project for this  year', () => {
  const currentYear = new Date().getFullYear().toString()
  // const getByTextApp = render(<App />).getByText;
  const getByTextWork = render(<Work />).getByText;
  // const linkElementApp = getByTextApp(currentYear, { exact: false });
  const linkElementWork = getByTextWork(currentYear, { exact: false });
  expect(linkElementWork).toBeInTheDocument();
});
