import React from 'react';
import { signOut } from '../App/App'
import './Nav.css';

const Nav = () => {
    return (
        <section>
            <h1>SWAPI</h1>
            <button onClick={signOut}>Sign Out</button>
        </section>
    )

}

export default Nav;
