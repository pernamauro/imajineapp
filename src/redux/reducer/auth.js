import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    token: null,
    profile: null,
    loading: false,
};

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                profile: null,
                loading: false,
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
        default:
            return state;
    }
};

export default auth;
