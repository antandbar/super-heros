import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Page from '../../layout/Page';
import { getCharacter } from '../service';
import Btn from '../../common/Btn';
import './HeroPage.css';

const HeroPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(name)
      .then(character => {
        setCharacter(character.data.results[0]);
      })

      .catch(() => {
        navigate('/404');
      });
  }, [name, navigate]);

  const returnSuperHeros = e => {
    e.preventDefault();
    navigate('/superheros');
  };
  return (
    <Page title="SUPER - HERO">
      <div className="hero-page-grid">
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="485"
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
        <div className="hero-page-div-btn">
          <Btn onClick={returnSuperHeros}>Return Super-Heros</Btn>
        </div>
      </div>
    </Page>
  );
};

export default HeroPage;
