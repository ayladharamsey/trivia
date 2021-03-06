import React from 'react';
import PropTypes from 'prop-types'
import './UserProfile.css';
import { Link } from 'react-router-dom'

const UserProfile = ({ name, quote, rating }) => {
    return (
        <section className='userContainer'>
            <div className='left'>
                <h2>Welcome <span>{name}</span></h2>
            </div>
            <div className='right'>
                <h3>Favorite Quote: <span> {quote} </span></h3>
                <h3>Level: <span>{rating}</span></h3>
                <Link to="/movies/:id/characters/favorites">
                    <button>Favorite Characters</button> 
                </Link>
            </div>
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