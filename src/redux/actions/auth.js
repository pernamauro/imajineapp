import { ActionTypes } from '../../constants/actionTypes';
import axios from 'axios';
import { axiosRegister, axiosLogin, axiosPutUserData } from '../../modules/api';

/*Register*/
export const registerRequest = () => {
    return {
        type: ActionTypes.REGISTER_REQUEST,
    };
};

export const registerFail = () => {
    return {
        type: ActionTypes.REGISTER_FAIL,
    };
};

export const registerSuccess = () => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
    };
};

export const register = (values) => {
    return async (dispatch) => {
        dispatch(registerRequest());
        try {
            await axiosRegister(values);
            dispatch(registerSuccess());
        } catch (error) {
            dispatch(registerFail());
        }
    };
};

/* Login */
export const waiting = (payload) => {
    return {
        type: ActionTypes.WAIT,
        payload,
    };
};

export const success = (payload) => {
    return {
        type: ActionTypes.SUCCESS,
        payload,
    };
};

export const failure = () => {
    return {
        type: ActionTypes.FAILURE,
    };
};

export const login = (values) => {
    return async (dispatch) => {
        dispatch(waiting());
        try {
            const {
                data: { data },
            } = await axiosLogin(values);
            dispatch(success(data));
        } catch (error) {
            dispatch(failure());
        }
    };
};

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT,
    };
};

/*update info user profile*/
export const putUserData = (values, token) => {
    return async (dispatch) => {
        dispatch(waiting());
        try {
            const {
                data: { data },
            } = await axiosPutUserData(values, token);
            dispatch({
                type: ActionTypes.PUT_USER_DATA,
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const cleanProfile = () => {
    return {
        type: ActionTypes.LOGOUT,
    };
};
