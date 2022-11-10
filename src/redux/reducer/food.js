import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
    allUserFoods: [],
};

const food = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ALL_FOODS:
            const { foods } = payload;
            return {
                ...state,
                allUserFoods: foods,
            };
        default:
            return state;
    }
};

export default food;
