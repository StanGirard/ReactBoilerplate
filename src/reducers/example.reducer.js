import { handleActions } from 'redux-actions'

export const initialState = {
  example: {
    text: 'Hello world !'
  }
}

export default handleActions({
  EXAMPLE_CONSTANTS: (state, action) => {return {...state, example: {...state.example, text: action.payload}}}
}, initialState)
