/* eslint-disable no-undef, no-unused-vars */
import * as serviceWorker from './util/serviceWorker';
import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
