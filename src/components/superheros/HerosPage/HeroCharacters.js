import { Fragment, Link } from 'react';
import './HeroCharacters.css';

const HeroCharacters = ({ characters }) => {
  return (
    <div className="hero-characters-container">
    
        {characters?.map(character => (
          <div key={character.id} className="hero-characters-img-name">
               <img className='hero-characters-img' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
               <span className='hero-characters-name'>{character?.name}</span> 
         </div>
         
        ))}
     
    </div>
  );
};

export default HeroCharacters;
