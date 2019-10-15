import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './OpeningCrawl.scss';
import $ from 'jquery';

const OpeningCrawl = ({title, date, episode, text, favoriteCards, characters }) => {
  const romanNum = () => {
    let roman = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
    return roman[episode]
  }

  $('#pause-button').click(function() {
    $('#swThemeAudio').each(function(){ 
        var frame = document.getElementById("swThemeAudio");
        frame.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'); 
    });
  });

  return (
    <article>
      <Crawl 
      title = {`Episode ${romanNum()}`}
      subTitle={title}
      text = {text + date}
      />
      <Link to={`/movies/${episode}/characters`}>
        <button className="show-characters" data={characters, favoriteCards} onClick={() => {console.log('Help!!!', characters, favoriteCards)}} >Go to Characters</button> }
      </Link>    
      <iframe width="2" height="2" src="https://www.youtube-nocookie.com/embed/EjMNNpIksaI?controls=1&autoplay=1&autohide=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    <div className="button">
        <button id="pause-button">STOP AUDIO</button>
    </div>
    </article>
  )
}

export default OpeningCrawl;

OpeningCrawl.propTypes = {
  title: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}