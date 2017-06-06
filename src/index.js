import React from 'react';
import ReactDOM from 'react-dom';
import DestinationList from './components/DestinationList.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<DestinationList />, document.getElementById('root'));
registerServiceWorker();
