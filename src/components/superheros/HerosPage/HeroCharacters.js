import { Link } from 'react-router-dom';
import './HeroCharacters.css';

const HeroCharacters = ({ characters }) => {
  return (
    <div className="hero-characters-grid">
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
