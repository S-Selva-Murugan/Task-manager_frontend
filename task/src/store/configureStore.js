import { createStore, combineReducers, applyMiddleware} from 'redux' 
import thunk from 'redux-thunk'
import todoReducer from '../reducers/todos'

const configureStore = () => {
    const store = createStore(combineReducers({
        todos: todoReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore