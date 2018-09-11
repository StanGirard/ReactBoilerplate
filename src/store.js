import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import exampleReducer from './reducers/example.reducer'
import { loadState } from './functions/example.localStorage'
import thunk from 'redux-thunk'
import { reducer as notificationsReducer } from 'reapop'
import {reducer as burgerMenu } from 'redux-burger-menu';

const persistedState = loadState()
const notifications = notificationsReducer()

const initialState = {
  burgerMenu: {
    primary: {
      isOpen: true
    }
  }
}

const reducer = combineReducers({
example: exampleReducer,
  notifications: notifications,
  burgerMenu: burgerMenu
})

const configureStore = () => {
  return createStore(
    reducer,
    persistedState,
    applyMiddleware(createLogger(), thunk),
    initialState
  )
}

export default configureStore
