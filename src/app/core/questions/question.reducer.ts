export const GET_QUESTION = 'GET_QUESTION';
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';

export function getQuestion(author: String, permlink: String) {
  return {
    type: GET_QUESTION
  }
}

const initialStateQuestion = {
  data: null,
  pending: false,
  error: null
}

export function question( state = initialStateQuestion, { type, payload } ) {
    // console.log(state);
    // console.log(type);
    // console.log(payload);
  switch ( type ) {
    case GET_QUESTION:
      return Object.assign({}, state, {data: initialStateQuestion.data, pending: true, error: null})
    case GET_QUESTION_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false, error: null})
    case GET_QUESTION_ERROR:
      return Object.assign({}, state, {data: initialStateQuestion.data, pending: false, error: 'Error'})
    default:
      return state;
  }
}
