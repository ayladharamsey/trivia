import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rating:'Select Ranking'
        } 
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateAppState(this.state)
        this.setState({
            name: '',
            quote: '',
            rating:''
        });

        //then it navigates us to the next page
        
    }

    render() {
        return (
            <form>
                <img alt="logo" src="/images/star_wars_logo_PNG42.png"/>
                <h1>Welcome to SWAPI!</h1>
                <h3>Name </h3>
                <input 
                    type='text' 
                    placeholder="Enter name" 
                    onChange={this.handleChange} 
                    name="name"
                    value={this.state.name}
                    />
                <h3>Quote </h3>
                <input 
                    type='text' 
                    placeholder="Enter quote" 
                    onChange={this.handleChange}
                    name="quote"
                    value={this.state.quote} 
                    />
                <h3> Select Jedi Rating </h3>
                <select name='rating' size='3' value={this.state.rating} onChange={this.handleChange}>
                    <option value='selectRanking'>Select Ranking</option>
                    <option value='apprentice'>Apprentice</option>
                    <option value='knight'>Knight</option>
                    <option value='master'>Master</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form;