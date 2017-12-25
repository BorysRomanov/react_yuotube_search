import { SET_REQUEST } from '../constants/Page'

const initialState = {
    movies: '',
}

export default function page(state = initialState, action) {

    switch (action.type) {
        case SET_REQUEST:
            return { ...state, movies: action.payload };

        default:
            return state;
    }

}