import React from 'react';
import './CharacterCards.scss';
import Star from "../assets/star.svg" 
import PropTypes from 'prop-types'
import activeStar from "../assets/star-active.svg"

const CharacterCards = ({ id, name, homeworld, population, species, films, favoriteCards, favoriteStatus }) => {
  return (
    <section className="card">
      {/* <div className="star-card-button" onClick={() => favoriteStatus({ id, name, homeworld, population, species, films })}></div> */}
      <div className="star-card-button" src={Star} alt="" onClick={() => favoriteStatus( id )}></div>
      {/* {!favoriteCards.length > 0 && favoriteCards.includes(id) &&
          <div className="star-card-button" src={activeStar} alt="" onClick={() => favoriteStatus( id )}></div>} */}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  homeworld: PropTypes.string,
  population: PropTypes.number,
  species: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired
}