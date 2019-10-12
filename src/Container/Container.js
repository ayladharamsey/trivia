import React from 'react';
import './Container.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import MovieCard from '../MovieCard/MovieCard'

const Container = (props) => {
    console.log('container props: ', props);  
    const movieData = props.movieData.map(movie => {
        return (
            <MovieCard
            key={movie.episode_id + Date.now()} 
            title={movie.title}
            episode={movie.episode_id}
            release_year={movie.release_date}
            characters={movie.characters}
            />
        )
    })
    return (
        <section>
            {/* <CharacterCard /> */}
            {movieData}
        </section>
    )
}

export default Container;