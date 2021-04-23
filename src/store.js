import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/rootReducer';

const middleWare=[thunk];
const intialState={};
const store=createStore(
    rootReducer,
    intialState,
    compose(
      applyMiddleware(...middleWare),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
  );

export default store;