import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <section>
            <img alt='profile'></img>
            <h2>Name</h2>
            <h3>Favorite Quote: <span> Quote</span> </h3>
            <h3>Level: <span>Level</span></h3>
            <button>Favorite Characters</button>
        </section>
    )
}

export default UserProfile;