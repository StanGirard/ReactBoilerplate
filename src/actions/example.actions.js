import * as constants from '../constants/example.constants'
import {createActions} from 'redux-actions'

export const {
    exampleConstants
} = createActions({},
    constants.EXAMPLE_CONSTANTS
);


//Async function call

export const fetchAPI = () => ({
    type: constants.API,
    payload : {
        url: 'http://whatthecommit.com/index.txt',
        success: exampleConstants

    }
});