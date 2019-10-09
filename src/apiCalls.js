export const movieTitles = moviesUrl => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + moviesUrl)
  .then(response => response.json())
  .then(movies => {
    const movieData = movies.results.map(movie => {
      const { title, characters } = movie;
      const characterData = characters.map(character => {
        console.log('character', character);
        return getCharacters(character)
      .then(name => ({ title, name }))
      // .then(something => console.log('something is ', something))
      });
      return Promise.all(characterData)
    });
    return Promise.all(movieData);
  })
  // .then(cbMovies => console.log('could be movies: ', cbMovies))
  .catch(error => console.log(error.message, 'Holy bat smoke batman, something went wrong!'))

}


 const getCharacters = charactersUrl => {
  //  console.log('In getCharacters with ', charactersUrl);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch (proxyurl + charactersUrl)
  .then(response => response.json())
  .then(data => {
    console.log('character data name is: ', data.name);
    return data.name})
  .catch(error => console.log(error.message, 'Holy bat smoke batman, something went wrong with our characters!'))
}