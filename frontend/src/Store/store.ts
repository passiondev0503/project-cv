import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from '../Redux/Reducers/Profile/ProfileReducer';


const rootReducer = combineReducers({
  profile: profileReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));



export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch