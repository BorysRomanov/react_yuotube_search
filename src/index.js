import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import Main from './containers/Main';
import Movie from './containers/Movie';

const store = configureStore();

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/movie" component={Movie}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
