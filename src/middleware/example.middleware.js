import { API } from '../constants/example.constants';

export const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export const loggerActionMiddleware = store => next => action => {
  console.log(action.type)
  next(action)
}
