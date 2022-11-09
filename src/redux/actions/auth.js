import { ActionTypes } from '../../constants/actionTypes';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
/* Logout */
export const logout = () => {
    return {
        type: ActionTypes.LOGOUT,
    };
};

/* Espera */
export const waiting = () => {
    return {
        type: ActionTypes.WAIT,
    };
};
/* Exito */
export const success = (payload) => {
    return {
        type: ActionTypes.SUCCESS,
        payload,
    };
};
/* Fallo */
export const failure = () => {
    return {
        type: ActionTypes.FAILURE,
    };
};
/* FLOW */
export const flow = (params) => {
    return async (dispatch) => {
        dispatch(waiting());
        try {
            const data = {
                profile: {
                    name: 'Gonza',
                    lastName: 'Bonelli',
                },
                token: 'tk_123456789',
            };
            await delay(5000);
            dispatch(success(data));
        } catch (error) {
            dispatch(failure());
        }
    };
};
