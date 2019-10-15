import React from 'react';
import './CharacterCard.css';
import Star from "../assets/star.svg" 

const CharacterCards = ({ id, name, homeworld, species, films, favoriteCards }) => {
  console.log('CharacterCards is here', name)
  return (
    
    <section className="card">
        <article className="card-title">
        <h3> Name: {name}</h3>
        </article>
        <article className="card-contents">
        <h3>Homeworld: {homeworld}</h3>
        <h3>Species: {species}</h3>
        <h3>Films: {films}</h3>
        </article>
    </section>
  )
}

export default CharacterCards;