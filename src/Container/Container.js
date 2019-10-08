import React from 'react';
import './Container.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import MovieCard from '../MovieCard/MovieCard'

const Container = () => {
    return (
        <section>
            <CharacterCard />
            <MovieCard />
        </section>
    )
}

export default Container;