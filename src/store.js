import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import exampleReducer from './reducers/example.reducer'
import { loadState } from './functions/example.localStorage'
import thunk from 'redux-thunk'
import { reducer as notificationsReducer } from 'reapop'

const persistedState = loadState()
const notifications = notificationsReducer()

const reducer = combineReducers({
  example: exampleReducer,
  notifications: notifications
})

const configureStore = () => {
  return createStore(
    reducer,
    persistedState,
    applyMiddleware(createLogger(), thunk)
  )
}

export default configureStore
