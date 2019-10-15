import React, { Component } from 'react';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
    super(props);
    this.state ={
    isFavorited: false
    }
  }

  render() {
      console.log('CharacterCard');
    return (
      <section className="card">
        <article className="card-title">
        <h3> Name: <span>Name</span></h3>
        <h3> Homeworld: <span>Homeworld</span></h3>
        <h3> Population: <span>Population</span></h3>
        <h3> Species: <span>Species</span></h3>
        <h3> Other Films: <span> Films</span></h3>
        <img alt='fave'></img>
        </article>
      </section>
    )
  } 
}

export default CharacterCard;
