import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import HeroPage from './HeroPage';
import { createMemoryHistory } from 'history';

test('Render button', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <HeroPage />
    </Router>,
  );

  screen.getByRole('button', { name: /Return Super-Heros/i });
  screen.getByAltText('Photo Character');

  //screen.debug();
});
