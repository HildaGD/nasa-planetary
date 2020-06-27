import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'

// const initialState = {
//     favoritePictures: [],
// }

const store = createStore(
  // initialState, 
    rootReducer,
    composeWithDevTools(applyMiddleware())
);

export default store;