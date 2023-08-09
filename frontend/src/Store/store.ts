import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from '../Redux/Reducers/Profile/ProfileReducer';
import draggableReducer from '../Redux/Reducers/DraggableReducer/DraggableReducer';
import imageUploadedReducer from '../Redux/Reducers/ImageUploadedReducer/imageUploadedReducer';
import uploadPannel from '../Redux/Reducers/UploadPannelReducer/UplaodPannel';
import { composeWithDevTools } from "redux-devtools-extension";


const rootReducer = combineReducers({
  draggableReducer:draggableReducer,
  profile: profileReducer,
  imageUploadedReducer:imageUploadedReducer,
  uploadPannel:uploadPannel

});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));



export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch