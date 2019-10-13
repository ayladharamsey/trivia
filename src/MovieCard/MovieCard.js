import React from 'react';
import './MovieCard.scss';
import Star from "../assets/star.svg" 
import { Link } from 'react-router-dom';

const MovieCard = ({ title, episode, release_year, characters}) => {
    console.log('movieCard props: ', title);
    return (
        <section className="card">
            <article className="card-title">
            <h3> Movie Title: {title}</h3>
            </article>
            <article className="card-contents">
            <h3>Episode: <span>{episode}</span></h3>
            <h3>Release Year: <span>{(release_year).slice(0,4)}</span></h3>
            <Link to="/movies/:id/characters">
                <button> Characters </button>
            </Link>
            </article>
        </section>
    )
}

export default MovieCard;