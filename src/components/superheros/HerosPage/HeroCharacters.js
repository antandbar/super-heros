import { Fragment, Link } from 'react';
import './HeroCharacters.css';

const HeroCharacters = ({ characters }) => {
  return (
    <div className="hero-characters-grid">
      {characters?.map(character => (
        <div key={character.id} className="hero-characters-item">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <span>{character?.name}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroCharacters;
