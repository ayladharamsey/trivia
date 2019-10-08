import React from 'react';
import './HeaderContainer.css';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile'

const HeaderContainer = () => {
    return (
        <section>
            <Nav />
            <UserProfile />
        </section>
    )
}

export default HeaderContainer;