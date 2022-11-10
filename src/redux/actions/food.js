import { ActionTypes } from '../../constants/actionTypes';
import axios from 'axios';

export const getAllFoods = (token) => {
    return async (dispatch) => {
        try {
            const {
                data: { data },
            } = await axios.get('http://localhost:8080/api/user', {
                headers: {
                    jwt: token,
                },
            });
            dispatch({
                type: ActionTypes.GET_ALL_FOODS,
                payload: data,
            });
        } catch (error) {
            console.error(error.message);
        }
    };
};

export const createFood = (values, id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/food', { values, id });
        } catch (error) {
            console.error(error.message);
        }
    };
};
