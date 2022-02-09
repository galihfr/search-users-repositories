import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// var getComposeEnhancers = () => {
//     if (window.navigator.userAgent.includes('Chrome')) {
//       return compose(
//         applyMiddleware(thunk)
//         ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//       );
//     }
//     return compose(applyMiddleware(thunk) );
// };

// var Store = createStore(reducers, getComposeEnhancers() );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;