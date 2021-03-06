import React from 'react';
import './HeaderContainer.scss';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile'
import PropTypes from 'prop-types'

const HeaderContainer = ({ name, quote, rating, signOut}) => {
    return (
        <section className="header-component">
            <Nav signOut={signOut}/>
            <UserProfile 
                name={name} 
                quote={quote} 
                rating={rating} 
            />
        </section>
    )
}

export default HeaderContainer;

HeaderContainer.propTypes = {
    name: PropTypes.string,
    quote: PropTypes.string,
    rating: PropTypes.string,
    signOut: PropTypes.func,
    viewCharacters: PropTypes.func
  }