import React from 'react';
import PropTypes from 'prop-types'
import './Nav.css';

const Nav = ({ signOut }) => {
    return (
        <section>
            <h1>SWAPI</h1>
            <button onClick={signOut}>Sign Out</button>
        </section>
    )

}

export default Nav;

Nav.propTypes = {
    signOut: PropTypes.func,
  }
