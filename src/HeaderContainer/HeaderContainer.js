import React from 'react';
import './HeaderContainer.css';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile'

const HeaderContainer = ({ name, quote, rating, signOut}) => {
    return (
        <section>
            <Nav signOut={ signOut }/>
            <UserProfile name={ name } quote={ quote } rating={ rating }/>
        </section>
    )
}

export default HeaderContainer;