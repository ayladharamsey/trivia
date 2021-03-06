import React from 'react';
import './Container.scss';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCards from '../CharacterCard/CharacterCards';

const Container = (props) => {
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
        cardData = props.charactersData.map(character => {
            return (
              <section className="card-components">
                <CharacterCards
                id={character.name}
                name={character.name} 
                homeworld={character.homeworld}
                population={character.population}
                species={character.species}
                films={character.films}
                favoriteStatus={props.favoriteStatus}
                />
              </section>
            )
        })
    }
    return (
        <section className="card-area">
            {cardData}
        </section>
    )
}

export default Container;

// need to add propTypess