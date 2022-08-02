import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import HeroCharacters from './HeroCharacters';
import { createMemoryHistory } from 'history';

test('renders HeroPage', () => {
  const characters = [
    {
      id: 1,
      name: 'Aquaman',
      description:
        'Once home to the mostpowerful ocean on Earth, he was banished to the hidden depths of the ocean floor to escape his wrath.',
      modified: '2014-10-01T13:52:40-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
    },
  ];

  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <HeroCharacters characters={characters}/>
    </Router>,
  );

  expect(screen.getByText('Aquaman')).toBeInTheDocument();
});
