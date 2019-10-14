import React from 'react';
import './Container.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import MovieCard from '../MovieCard/MovieCard'

const Container = (props) => {
    console.log('container props: ', props);  
    const movieData = props.movieData.map(movie => {
        return (
            <section className="card-components">
                <MovieCard
                id={movie.episode_id} 
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