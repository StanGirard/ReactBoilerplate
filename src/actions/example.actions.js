import * as constants from '../constants/example.constants'
import {createActions} from 'redux-actions'

export const {
    exampleConstants
} = createActions({},
    constants.EXAMPLE_CONSTANTS
);