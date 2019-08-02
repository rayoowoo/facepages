import { RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS, RECEIVE_CURRENT_USER } from '../actions/post_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return Object.values(action.errors.responseJSON)
        case RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST, CLEAR_POST_ERRORS:
            return [];
        default:
            return state;;
    }
}