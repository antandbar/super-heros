import { Fragment, useEffect, useState } from 'react';
import Page from '../../layout/Page';
import { getCharacter } from '../service';
import { useNavigate, useParams } from 'react-router-dom';

const HeroPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(name)
      .then(character => {
        setCharacter(character);
        console.log(character.data.results);
      })

      .catch(() => {
        navigate('/404');
      });
  }, [name, navigate]);
  return (
    <Page title="HERO">
      <Fragment></Fragment>
    </Page>
  );
};

export default HeroPage;