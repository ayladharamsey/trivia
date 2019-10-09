import React from 'react';
import PropTypes from 'prop-types'
import './UserProfile.css';

const UserProfile = ({ name, quote, rating, viewFavoriteCharacters }) => {
    return (
        <section>
            <img alt='profile'></img>
            <h2>Welcome <span>{name}</span></h2>
            <h3>Favorite Quote: <span> {quote} </span></h3>
            <h3>Level: <span>{rating}</span></h3>
            <button onClick={viewFavoriteCharacters}>Favorite Characters</button> 
        </section>
    )
}

export default UserProfile;

UserProfile.propTypes = {
    name: PropTypes.string,
    quote: PropTypes.string,
    rating: PropTypes.string,
    viewCharacters: PropTypes.func
  }