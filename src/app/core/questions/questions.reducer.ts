export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';

export function getQuestions() {
  return {
    type: GET_QUESTIONS
  }
}

const initialStateQuestions = {
  data: [],
  pending: false,
  error: null
}

export function questions( state = initialStateQuestions, { type, payload } ) {
  switch ( type ) {
    case GET_QUESTIONS:
      return Object.assign({}, state, {data: initialStateQuestions.data, pending: true, error: null})
    case GET_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false, error: null})
    case GET_QUESTIONS_ERROR:
      return Object.assign({}, state, {data: initialStateQuestions.data, pending: false, error: 'Error'})
    default:
      return state;
  }
}
