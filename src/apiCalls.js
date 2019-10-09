export const movieTitles = moviesUrl => {
  //console.log('moviesUrl is: ', moviesUrl);
  return fetch (moviesUrl)
  .then(response => response.json())
  .then(data => data.results)  
    // console.log('data is : ', data))
  .catch(error => console.log('Holy batsmoke batman, something went wrong!'))
}

// export const movieCharacters = charactersUrl => {
//   return fetch (charactersUrl)
//   .then(response => response.json())
//   .then(data => data)
//   .catch(error => console.log('Holy batsmoke batman, something went wrong with our characters!'))
// }