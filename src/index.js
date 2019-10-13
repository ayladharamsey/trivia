import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

=======
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
>>>>>>> more-data-manipulation

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(router, document.getElementById('root'))
serviceWorker.unregister();
