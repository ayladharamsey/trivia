import React from 'react';
import './CharacterCard.css';

const CharacterCard = () => {
    return (
        <article>
            <h3> Name: <span>Name</span></h3>
            <h3> Homeworld: <span>Homeworld</span></h3>
            <h3> Population: <span>Population</span></h3>
            <h3> Species: <span>Species</span></h3>
            <h3> Other Films: <span> Films</span></h3>
            <img alt='fave'></img>
        </article>
    )
}

export default CharacterCard;
