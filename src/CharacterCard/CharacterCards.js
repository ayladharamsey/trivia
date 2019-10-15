import React from 'react';
import './CharacterCards.scss';
import Star from "../assets/star.svg";
import activeStar from "../assets/star-active.svg"

const CharacterCards = ({ id, name, homeworld, population, species, films, favoriteCards, favoriteStatus }) => {
  console.log('CharacterCards is here', name)
  return (
    
    <section className="card">
        <article className="card-title">
        <h3> Name: {name}</h3>
        <img className="star-card-button" src={Star} alt="" onClick={() => favoriteStatus(id)}/>
        </article>
        <article className="card-contents">
        <h3>Homeworld: {homeworld}</h3>
        <p>Population: {population}</p>
        <h3>Species: {species}</h3>
        <h3 className="films">Films: {films}</h3>
        </article>
    </section>
  )
}

export default CharacterCards;