export const movieTitles = moviesUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + moviesUrl)
  .then(response => response.json())
  .then(movies => {
    const movieData = movies.results.map(movie => {
      const { title, episode_id, release_date, opening_crawl, characters } = movie;
      return { title, episode_id, release_date, opening_crawl}
      // const characterData = characters.map(character => {
      //   return getCharacters(character)
      //   .then(name => ({ title, name }))
      // // .then(something => console.log('something is ', something))
      // });
      // return Promise.all(characterData)
    });

    return Promise.all(movieData);})
  .catch(error => console.log(error.message, 'Holy bat smoke batman, something went wrong with movies!'))
}

const getCharacters = charactersUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + charactersUrl)
  .then(response => response.json())
  .then(data => {
    // console.log('character data name is: ', data.name);
    return data.name})
  .catch(error => console.log(error.message, 'Holy bat smoke batman, something went wrong with our characters!'))
}