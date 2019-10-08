import React from 'react';
import './MovieCard.css';

const MovieCard = () => {
    return (
        <section>
            <h3> Movie Title </h3>
            <h3>Episode: <span>Episode</span></h3>
            <h3>Release Year: <span>1234</span></h3>
            <button> Characters </button>
        </section>
    )
}

export default MovieCard;