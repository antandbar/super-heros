import { Link } from 'react-router-dom';
import Spinner from '../../common/spinner';
import './HeroCharacters.css';

const HeroCharacters = ({ characters, isLoading }) => {
  return (
    <div className="hero-characters-grid">
      {isLoading && <Spinner />}
      {characters?.map(character => (
        <div key={character.id} className="hero-characters-item">
           <Link to={`/superheros/${character?.name}`}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          </Link>
          <span>{character?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroCharacters;
