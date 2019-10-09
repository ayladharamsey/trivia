import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, quote, rating, viewCharacters }) => {
    return (
        <section>
            <img alt='profile'></img>
            <h2>Welcome <span>{name}</span></h2>
            <h3>Favorite Quote: <span> {quote} </span></h3>
            <h3>Level: <span>{rating}</span></h3>
            <button onClick={viewCharacters}>Favorite Characters</button> 
        </section>
    )
}

export default UserProfile;