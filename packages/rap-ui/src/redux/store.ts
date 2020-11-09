import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const initialState = {
}
const windowObj:any = window

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        windowObj.__REDUX_DEVTOOLS_EXTENSION__ && windowObj.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;
