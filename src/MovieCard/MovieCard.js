import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, episode, release_year, favoriteCards, characters}) => {
  return (
    <section className="card">
        <article className="card-title">
        <h3> Movie Title: {title}</h3>
        </article>
        <article className="card-contents">
        <h3>Episode: <span>{episode}</span></h3>
        <h3>Release Year: <span>{(release_year).slice(0,4)}</span></h3>
        <Link to={`/movies/${id}`} key={id}>
            <button> Characters </button>
        </Link>
        </article>
    </section>
  )
}

export default MovieCard;