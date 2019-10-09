import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rating: []
        } 
    }

    render() {
        return(
            <section>
                <img alt="logo"/>
                <h1>Welcome to SWAPI!</h1>
                <h3>Name </h3>
                <input type='text' placeholder="Enter name" />
                <h3>Quote </h3>
                <input type='text' placeholder="Enter quote" />
                <h3>Jedi Rating </h3>
                <select name='rating' size='3'>
                    <option value='apprentice'>Apprentice</option>
                    <option value='knight'>Knight</option>
                    <option value='master'>Master</option>
                </select>
                <button>Submit</button>
            </section>
        )
    }
}

export default Form;