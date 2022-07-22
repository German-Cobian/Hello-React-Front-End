import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { greetingReducer } from './greetings';

const rootReducer = combineReducers({ greeting: greetingReducer });

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default configureStore;
