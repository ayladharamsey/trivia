import React, { Component } from 'react';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor() {
        super();
        this.state ={
            isFavorited: false
        }
    }

    render() {
        return (
            <article className='card'>
                <h3> Name: <span>Name</span></h3>
                <h3> Homeworld: <span>Homeworld</span></h3>
                <h3> Population: <span>Population</span></h3>
                <h3> Species: <span>Species</span></h3>
                <h3> Other Films: <span> Films</span></h3>
                <img alt='fave'></img>
            </article>
        )

    }
    
}

export default CharacterCard;
