import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    token: null,
    profile: null,
    loading: false,
};

const auth = (
    state = initialState /* estado inicial */,
    { type, payload } /* type de la action */,
) => {
    switch (type) {
        // Logout
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
            const { token, profile } = payload;
            return {
                ...state,
                isAuthenticated: true,
                token,
                profile,
                loading: false,
            };
        case ActionTypes.FAILURE:
            return {
                loading: false,
            };
        default:
            return state;
    }
};

export default auth;
