import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCharacters } from '../service';
import HeroCharacters from './HeroCharacters';
import Page from '../../layout/Page';

const HerosPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters.data.results);
      })

      .catch(() => {
        navigate('/404');
      });
  }, [navigate]);

  return (
    <Page title="SUPER - HEROS">
      <Fragment>
        <HeroCharacters characters={characters} />
        <p>This is test</p>
      </Fragment>
    </Page>
  );
};

export default HerosPage;
