import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home.jsx';

import './Main.scss';

ReactDOM.render(
    <div className='main-container'>
        <Home />
    </div>,
    document.getElementById('root')
);
