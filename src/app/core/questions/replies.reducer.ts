export const GET_REPLIES = 'GET_REPLIES';
export const GET_REPLIES_SUCCESS = 'GET_REPLIES_SUCCESS';
export const GET_REPLIES_ERROR = 'GET_REPLIES_ERROR';

export function getReplies() {
    return {
        type: GET_REPLIES
    }
}

const initialStateReplies = {
    data: [],
    pending: false,
    error: null
}

export function replies(state = initialStateReplies, { type, payload }) {
    switch (type) {
        case GET_REPLIES:
            return Object.assign({}, state, { data: initialStateReplies.data, pending: true, error: null })
        case GET_REPLIES_SUCCESS:
            return Object.assign({}, state, { data: payload, pending: false, error: null })
        case GET_REPLIES_ERROR:
            return Object.assign({}, state, { data: initialStateReplies.data, pending: false, error: 'Error' })
        default:
            return state;
    }
}
