import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            quote: '',
            rating: ''
        } 
    }

    submitInfo = (event) => {
        this.setState({[event.target.name]: [event.target.value]})
    }

    handleSubmit = event => {
        this.props.updateState(this.state)
        this.setState({
            name: '',
            quote: '',
            rating: ''
        });

        // passes information up to app 
        // within app it will update the state to match updated state within form
        // we will have handleSubmit reset the state back to null
        //then it navigates us to the next page
        
    }

    render() {
        return(
            <section>
                <img alt="logo" src="/images/star_wars_logo_PNG42.png"/>
                <h1>Welcome to SWAPI!</h1>
                <h3>Name </h3>
                <input 
                    type='text' 
                    placeholder="Enter name" 
                    onChange={this.submitInfo} 
                    name="name"
                    value={this.state.name}
                    />
                <h3>Quote </h3>
                <input 
                    type='text' 
                    placeholder="Enter quote" 
                    onChange={this.submitInfo}
                    name="quote"
                    value={this.state.quote} 
                    />
                <h3> Select Jedi Rating </h3>
                <select 
                    name='rating' 
                    size='3' 
                    onChange={this.submitInfo}
                    value={this.state.rating}
                    >
                    <option name='rating'value='apprentice' onClick={this.handleSubmit}>Apprentice</option>
                    <option value='knight' onClick={this.handleSubmit}>Knight</option>
                    <option value='master' onClick={this.handleSubmit}>Master</option>
                </select>
                <button onClick={this.handleSubmit}>Submit</button>
            </section>
        )
    }
}

export default Form;