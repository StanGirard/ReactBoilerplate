import { handleActions } from 'redux-actions'


export const initialState = {
  example: {
    text: 'Hello world !'
  },
  api: {
    pending: true,
    content: null
  }
}

export default handleActions({
  EXAMPLE_CONSTANTS: (state, action) => {return {...state, example: {...state.example, text: action.payload}}},
  FETCH_API_PENDING: (state,action) => {return{...state, api: {...state.api, pending: true  }}},
  FETCH_API_SUCCESS: (state,action) => {return{...state, api: {...state.api, pending: false, content: action.content  }}},
  FETCH_API_ERROR: (state,action) => {return{...state, api: {...state.api, pending: false, error: action.error  }}}

}, initialState)
