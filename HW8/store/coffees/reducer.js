

import { SET_ERROR_COFFEES, SET_DATA_COFFEES, SET_LOADING_COFFEES } from "./action";

const initialState = {
    isError: true,
    isLoading: false,
    data: null
};

export const coffeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_COFFEES: {
            return { ...state, isLoading: action.payload };
        }

        case SET_ERROR_COFFEES: {
            return { ...state, isError: action.payload };
        }

        case SET_DATA_COFFEES: {
            return { ...state, data: action.payload };
        }

        default: {
            return state;
        }
    }
};