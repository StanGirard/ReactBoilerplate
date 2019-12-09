import * as constants from '../constants/example.constants'
import { createActions } from 'redux-actions'
import { initialState } from '../reducers/example.reducer'

export const {
  exampleConstants,
  
} = createActions({},
  constants.EXAMPLE_CONSTANTS
)

// Async function call

export const fetchAPI = (url) => ({
  type: constants.API,
  payload: {
    url: 'url',
    success: exampleConstants

  }
})

export const fetchAPIPending = ( ) => ({
  type: constants.FETCH_API_PENDING,
  
})

export const fetchAPISuccess = ( payload) => ({
  type: constants.FETCH_API_SUCCESS,
  content: payload
})

export const fetchAPIError = ( payload) => ({
  type: constants.FETCH_API_ERROR,
  error: payload
  
})





