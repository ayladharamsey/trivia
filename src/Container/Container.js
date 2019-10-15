import React from 'react';
import './Container.scss';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCards from '../CharacterCard/CharacterCards';

const Container = (props) => {
    console.log('container props: ', props);
    let cardData; 

    if(props.movieData){
      cardData = props.movieData.map(movie => {
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
    })} else {
        console.log('character data', props.charactersData);
        cardData = props.charactersData.map(character => {
            console.log('character is: ', character);
            return (
                <section className="card-components">
                    <CharacterCards
                    id={character.name}
                    name={character.name} 
                    homeworld={character.homeworld}
                    species={character.species}
                    />
                </section>
            )
        })
    }
    return (
        <section>
            {cardData}
            {/* {movies} */}
        </section>
    )
}

export default Container;

// need to add propTypess