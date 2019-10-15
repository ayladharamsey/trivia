export const movieTitles = moviesUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + moviesUrl)
  .then(response => response.json())
  .then(movies => {
    const movieData = movies.results.map(movie => {
      let { title, episode_id, release_date, opening_crawl, characters } = movie;
      return { title, episode_id, release_date, opening_crawl, characters } 
    });
    return Promise.all(movieData);})
  .catch(error => console.log(error.message, 'These are not the movies you are looking for.'))
}

export const getMovieCharacters = (movieId) => {
  let movieUrl = `https://swapi.co/api/films/${movieId}`
  return fetch(movieUrl)
  .then(response => {
    if(!response.ok) {
      throw new Error(`${response.status} Didn't quite make it.`)
    }
    return response.json()
  })
  .then(data => data.characters)
  .then(characters=> characters.splice(0,10))
  .then(data => getCharacterSpecifics(data))
}

const getCharacterSpecifics = (characterUrl) => {
  let charactersData = characterUrl.map(link => {
    return fetch(link)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} Didn't quite make it.`)
      }
      return response.json()
    })
    .then(data => {
      return {
        name:data.name,
        homeworld: data.homeworld,
        species: data.species,
        films: data.films
      }
    })
  })
  return Promise.all(charactersData)
} 

export const getFilmTitles = (characters) => {
  let films = characters.map(character => {
    let filmTitles = character.films.map(film => {
      return fetch(film)
      .then(response => {
        if(!response.ok) {
          throw new Error(`${response.status} These are not the droids you're looking for.`)
        }
        return response.json()
      })
      .then(film => film.title)
    })
    return Promise.all(filmTitles)
    .then(filmTitles => {
      return {
        ...character,
        films: filmTitles
      }
    }
    )
  })
  return Promise.all(films)
}


export const getCharacters = (charactersUrl) => {
  return fetch(charactersUrl)
  .then(response => {
    if(!response.ok) {
      throw Error('Do or not do. There is no try. Looks like it is not do.')
    }
    return response.json()
  })
}

export const getPlanets = (planetsUrl) => {
  return fetch(planetsUrl)
  .then(response => {
    if(!response.ok) {
      throw Error('Do or not do. There is no try. Looks like it is not do.')
    }
    return response.json()
  })
}

export const getPeople = (people) => {
  const promises = people.map(person => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({
        homeworld: data.name,
        population: data.population,
        name: person.name,
        species: person.species,
        films: person.films
        }))
      .catch(error => console.log(error));
  });
  return Promise.all(promises);
}

export const getSpecies = (people) => {
  const promises = people.map(person => {
    return fetch(person.species)
      .then(response => response.json())
      .then(data => ({
        ...person,
        id: person.created,
        species: data.name
      }))
      .catch(error => console.log(error));
  });
  return Promise.all(promises);
}

export const getResidents = (planets) => {
  const allPlanets = planets.map(planet => {
    const residents = planet.residents.map(resident => {
      return fetch(resident)
      .then(response => response.json())
      .then(data => data.name)
      .catch(error => console.log({ error }))
    });
    return Promise.all(residents)
      .then(residents => ({
        name: planet.name,
        population: planet.population,
        residents: residents
      }))
  });
  return Promise.all(allPlanets)
}
