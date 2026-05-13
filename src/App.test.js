import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import About from './pages/About';
import Work from './pages/Work';
import Certifications from './pages/Certifications';
import Privacy from './pages/Privacy';

test('work page includes a project for the current year', () => {
  const currentYear = new Date().getFullYear().toString();
  render(<Work />);
  expect(screen.getByText(currentYear, { exact: false })).toBeInTheDocument();
});

test('about page renders technology groups and resume link', () => {
  render(<About />);

  expect(screen.getByText('Familiar Technologies')).toBeInTheDocument();
  expect(screen.getByText('Computer Languages')).toBeInTheDocument();
  const resumeLink = screen.getByText('Request Resume').closest('a');
  expect(resumeLink).toHaveAttribute('href', expect.stringContaining('mailto:mirkanbaba1@gmail.com'));
});

test('work page renders source code links', () => {
  render(<Work />);

  const sourceLinks = screen.getAllByText('Source Code');
  expect(sourceLinks.length).toBeGreaterThan(0);
});

test('certifications page renders certification title and link', () => {
  render(<Certifications />);

  expect(screen.getByText('Certifications')).toBeInTheDocument();
  expect(screen.getByText('View certificate image')).toBeInTheDocument();
});

test('privacy page renders maintenance notice', () => {
  render(<Privacy />);
  expect(screen.getByText('Privacy Policy Page Is Under Constructer')).toBeInTheDocument();
});
