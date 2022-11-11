import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    token: null,
    profile: null,
    loading: false,
    created: false,
};

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                created: false,
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                created: true,
            };
        case ActionTypes.WAIT:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.SUCCESS:
            const { user, token } = payload;
            return {
                ...state,
                isAuthenticated: true,
                token: token,
                profile: user,
                loading: false,
            };
        case ActionTypes.FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                profile: null,
                loading: false,
            };
        case ActionTypes.PUT_USER_DATA:
            return {
                ...state,
                profile: payload,
                loading: false,
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                profile: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default auth;
