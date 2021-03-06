import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function( state = {}, action ) {
    switch (action.payload) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}