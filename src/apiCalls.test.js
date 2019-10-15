import React from 'react';
import { shallow } from 'enzyme';
import App from './App/App';
import { movieTitles } from './apiCalls';

describe('apiCalls', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      }))
    });
  
    it('should make successful call to get movie data', async () => {
      const url = 'https://swapi.co/api/films/1';
      const corsUrl = 'https://cors-anywhere.herokuapp.com/undefined'
      await movieTitles(url)
      expect(window.fetch).toHaveBeenCalledWith('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films/1')
    });
  
    it('should throw error when fetching movies', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(movieTitles()).rejects.toEqual(Error('These are not the movies you are looking for.'))
    });
}),

describe('Character Data Fetching', () => { 

    it('should be able to fetch character data with the correct URL ', () => {
        
    });

    it('should should return character data(happy) ', () => {
  
    });

    it('should throw an error if the response is not ok ', () => {
  
    });

    it('should throw an error if the server is down ', () => {
  
    });
  
}),

describe('Movie Data Fetching', () => {


 
    it('should be able to fetch movie data with the correct URL', () => {
  
    });

    it('should should return movie data(happy) ', () => {
  
    });

    it('should throw an error if the response is not ok ', () => {
  
    });

    it('should throw an error if the server is down ', () => {
  
    });
  
    
}),

describe('Planet Data Fetching', () => {

    it('should be able to fetch planet data with the correct URL', () => {
  
    });

    it('should should return planet data(happy) ', () => {
  
    });

    it('should throw an error if the response is not ok ', () => {
  
    });

    it('should throw an error if the server is down ', () => {
  
    });
})