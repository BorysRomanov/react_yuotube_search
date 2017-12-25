import { SET_REQUEST } from '../constants/Page';

export function setRequest(movies) {

    return {
        type: SET_REQUEST,
        payload: movies
    }

}
