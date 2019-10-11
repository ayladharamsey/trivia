import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = () => {
    return (
        <section>
            <h3> Movie Title </h3>
            <h3>Episode: <span>Episode</span></h3>
            <h3>Release Year: <span>1234</span></h3>
            <Link to="/movies/:id/characters">
                <button> Characters </button>
            </Link>
        </section>
    )
}

export default MovieCard;