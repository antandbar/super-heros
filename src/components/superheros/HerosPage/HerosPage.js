import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCharacters } from '../service';
import Gallery from '../../common/Gallery';
import HeroCharacters from './HeroCharacters';
import Page from '../../layout/Page';

const HerosPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters.data.results);
        //console.log(characters.data.results);
      })

      .catch(() => {
        navigate('/404');
      });
  }, [navigate]);

  return (
    <Page title="SUPER - HEROS">
      <Fragment>
        {/*  <Gallery urlComic={urlComic} /> */}
        <HeroCharacters characters={characters} />
        <p>This is test</p>
      </Fragment>
    </Page>
  );
};

export default HerosPage;
