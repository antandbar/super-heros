import { Fragment, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
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
        setCharacter(character.data.results[0]);
        console.log(character.data.results[0]);
      })

      .catch(() => {
        navigate('/404');
      });
  }, [name, navigate]);

  const goSuperHeros = e => {
    e.preventDefault();
    navigate('/superheros');
  };
  return (
    <Page title="HERO">
      <Fragment>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
              alt="Photo Character"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button variant="outlined" onClick={goSuperHeros}>superheros</Button>
      </Fragment>
    </Page>
  );
};

export default HeroPage;
