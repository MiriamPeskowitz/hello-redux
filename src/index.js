import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index.js';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
// ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(render);
//abstract it to named function so we can subscribe to render updates!!!
 // ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

