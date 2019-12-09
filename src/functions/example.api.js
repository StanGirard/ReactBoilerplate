import {fetchAPIPending, fetchAPISuccess, fetchAPIError} from '../actions/example.actions'
import {sendNotification} from '../functions/generateNotification'

export const fetchAPI = () => {
    return dispatch => {
        dispatch(fetchAPIPending());
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchAPISuccess(res))
            sendNotification("Hello", res.title, "success")
            return res;
        })
        .catch(error => {
            dispatch(fetchAPIError(error));
        })
    }
}

export default fetchAPI;
