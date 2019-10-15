import React from 'react';
import './CharacterCards.scss';

const CharacterCards = ({ id, name, homeworld, population, species, films, favoriteCards, favoriteStatus }) => {
  return (
    <section className="card">
        <div className="star-card-button" onClick={() => favoriteStatus(id)}></div>
        <article className="card-title">
        <h3> Name: <span>{name}</span></h3>
        </article>
        <article className="card-contents">
        <h3>Homeworld: <span>{homeworld}</span></h3>
        <h3>Population: <span>{population}</span></h3>
        <h3>Species: <span>{species}</span></h3>
        <h3 className="films">Films: <span>{films}</span></h3>
        </article>
    </section>
  )
}

export default CharacterCards;