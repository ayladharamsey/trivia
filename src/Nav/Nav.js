import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ signOut }) => {
    return (
        <section className='navContainer'>
            <h1>Star Wars Trivia</h1>
            <Link to="/">
                <button onClick={signOut}>Sign Out</button>
            </Link>
        </section>
    )

}

export default Nav;

Nav.propTypes = {
    signOut: PropTypes.func,
  }
