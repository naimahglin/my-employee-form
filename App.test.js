import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Employee Management System heading', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Employee Management System/i);
  expect(headingElement).toBeInTheDocument();
});
