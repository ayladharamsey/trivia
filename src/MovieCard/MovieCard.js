import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, episode, release_year, characters}) => {
    console.log('movieCard props: ', title);
    return (
        <section>
            <h3> Movie Title: {title}</h3>
            <h3>Episode: <span>{episode}</span></h3>
            <h3>Release Year: <span>{release_year}</span></h3>
            <Link to="/movies/:id/characters">
                <button> Characters </button>
            </Link>
        </section>
    )
}

export default MovieCard;