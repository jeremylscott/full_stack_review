import Login from "../components/Login";
import axios from 'axios'

const initialState = {
    user: {}
}

// action types
const LOGIN = 'LOGIN'

// action creators
export function login(username,password) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', {username,password})
    }
}

// reducer function
function reducer(state=initialState, action) {
    switch(action.type) {
        case `${LOGIN}_FULFILLED`:
            return {
                ...state, user: action.payload
            }

            default: return state;

    }
}

export default reducer
