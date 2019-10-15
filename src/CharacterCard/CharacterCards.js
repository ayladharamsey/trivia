import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCards.scss';

const CharacterCards = ({ id, name, homeworld, population, species, films, favoriteStatus }) => {
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

CharacterCards.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.number,
  species: PropTypes.string,
  films: PropTypes.string,
  favoriteStatus: PropTypes.func
}