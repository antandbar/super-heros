import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters } from '../service';
import HeroCharacters from './HeroCharacters';
import Page from '../../layout/Page';

const HerosPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters.data.results);
        setIsLoading(false);
      })
      .catch(() => {
        navigate('/404');
      });
  }, [navigate]);

  return (
    <Page title="SUPER - HEROS">
      <HeroCharacters characters={characters} isLoading={isLoading} />
    </Page>
  );
};

export default HerosPage;
