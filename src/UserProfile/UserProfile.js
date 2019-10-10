import React from 'react';
import PropTypes from 'prop-types'
import './UserProfile.css';
import { Link } from 'react-router-dom'

const UserProfile = ({ name, quote, rating }) => {
    return (
        <section>
            <img alt='profile'></img>
            <h2>Welcome <span>{name}</span></h2>
            <h3>Favorite Quote: <span> {quote} </span></h3>
            <h3>Level: <span>{rating}</span></h3>
            <Link to="/movies/characters/favorites">
                <button >Favorite Characters</button> 
            </Link>
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