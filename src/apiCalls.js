export const movieTitles = moviesUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + moviesUrl)
  .then(response => response.json())
  .then(movies => {
    const movieData = movies.results.map(movie => {
      let { title, episode_id, release_date, opening_crawl, characters, species, planets } = movie;
      return { title, episode_id, release_date, opening_crawl, characters, species, planets } 
      //  const characterData = movie.characters.map(character => {
      //   return getCharacters(character)
      //   .then(name => ({ name }))
      // });
      // return Promise.all(characterData);
    });
    return Promise.all(movieData);})
  .catch(error => console.log(error.message, 'Holy bat smoke batman, something went wrong with movies!'))
}

const getCharacters = charactersUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + charactersUrl)
  .then(response => response.json())
  .then(data => {
    return data.name})
  .catch(error => console.log(error.message, 'Do or not do. There is no try.'))
}