import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

var getComposeEnhancers = () => {
    if (window.navigator.userAgent.includes('Chrome')) {
      return compose(
        applyMiddleware(thunk)
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
    return compose(applyMiddleware(thunk) );
};

var Store = createStore(reducers, getComposeEnhancers() );

export default Store;