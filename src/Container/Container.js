import React from 'react';
import './Container.scss';
import MovieCard from '../MovieCard/MovieCard'

const Container = (props) => {
    console.log('container props: ', props);  
    const movieData = props.movieData.map(movie => {
        return (
            <section className="card-components">
                <MovieCard
                key={movie.episode_id + movie.title} 
                title={movie.title}
                episode={movie.episode_id}
                release_year={movie.release_date}
                characters={movie.characters}
                />
            </section>
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

// need to add propTypess