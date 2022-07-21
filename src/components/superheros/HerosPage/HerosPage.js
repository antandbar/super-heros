import { Fragment, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { getCharacters } from '../service';
import Gallery from '../../common/Gallery';
import HeroCharacters from './HeroCharacters';

const HerosPage = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(
          characters.data.results,
        );
        //console.log(characters.data.results); 
      })

      .catch(() => {
        //navigate('/404');
      });
  }, []);

  return (
    <Fragment>
     {/*  <Gallery urlComic={urlComic} /> */}
     <HeroCharacters characters={characters} />
      <p>This is test</p>
      <Button variant="contained">Hello World</Button>
    </Fragment>
  );
};

export default HerosPage;
