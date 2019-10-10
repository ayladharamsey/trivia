import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'



class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rating: 'Select Rating',
        } 
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    handleSubmit = event => {
        const{ updateAppState } = this.props
        event.preventDefault();
        updateAppState(this.state);
        this.setState({
            name: '',
            quote: '',
            rating:'Select Ranking'
        });

        //then it navigates us to the next page
        
    }

    render() {
        const { name, quote, rating } = this.state;
        const isEnabled = (name && quote && rating !== 'Select Ranking');
        return (
            <form>
                <img alt="logo" src={logo}/>
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
                <select
                    name='rating' 
                    size='3'
                    onChange={this.handleChange} 
                    value={this.state.rating}>
                        <option disabled value='Select Rating'>Select Rating</option>
                        <option value='apprentice'>Apprentice</option>
                        <option value='knight'>Knight</option>
                        <option value='master'>Master</option>
                </select>
                <h5>{this.state.error}</h5>
                <Link to='/movies'>
                    <button onClick={this.handleSubmit} disabled={!isEnabled}>Submit</button>
                </Link>
            </form>
        )
    }
}

export default Form;

Form.propTypes = {
    name: PropTypes.string,
    quote: PropTypes.string,
    rating: PropTypes.string
}
