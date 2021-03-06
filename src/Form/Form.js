import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
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
    }

    handleSubmit = () => {
        const{ updateAppState } = this.props
        updateAppState(this.state);
        this.setState({
            name: '',
            quote: '',
            rating:'Select Ranking'
        });  
    }

    render() {
        const { name, quote, rating } = this.state;
        const isEnabled = (name && quote && rating !== 'Select Ranking');
        return (
            <form>
                <img alt="star wars logo" src={logo}/>
                <h3>Name </h3>
                <input 
                    type='text' 
                    placeholder="Enter name" 
                    onChange={this.handleChange} 
                    name="name"
                    value={this.state.name}
                    className='name-input'
                    />
                <h3>Quote </h3>
                <input 
                    type='text' 
                    placeholder="Enter quote" 
                    onChange={this.handleChange}
                    name="quote"
                    value={this.state.quote} 
                    className='quote-input'
                    />
                <h3> Select Jedi Rating </h3>
                <div className='select'>
                    <select
                        name='rating' 
                        onChange={this.handleChange} 
                        value={this.state.rating}>
                            <option disabled value='Select Rating'>Select Rating</option>
                            <option value='apprentice'>Apprentice</option>
                            <option value='knight'>Knight</option>
                            <option value='master'>Master</option>
                    </select>
                </div>
                <h5>{this.state.error}</h5>
                <Link to='/movies'><button className='submit' onClick={this.handleSubmit} disabled={!isEnabled}>Submit</button></Link>
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
