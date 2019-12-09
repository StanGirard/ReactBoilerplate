import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import exampleReducer from './reducers/example.reducer'
import { loadState } from './functions/example.localStorage'
import thunk from 'redux-thunk'


const persistedState = loadState()


const reducer = combineReducers({
  example: exampleReducer
})

const configureStore = () => {
  return createStore(
    reducer,
    persistedState,
    applyMiddleware(createLogger(), thunk)
  )
}

export default configureStore
