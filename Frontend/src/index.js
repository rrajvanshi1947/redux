import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

import TravelerLogin from './components/TravelerLogin'
import Profile from './components/Profile'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(<Provider store= {store}>
<TravelerLogin />
</Provider>, document.getElementById('root'));
registerServiceWorker();
