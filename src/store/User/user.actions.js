import userTypes from './user.types';

export const setCurrentUser = (user) => {
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: user
    }
};

export const resetAllForms = () => dispatch => {
    dispatch({ type: userTypes.RESET_AUTH_FORMS });
};

export const emailSignStart = userCredidentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredidentials
});

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutUserStart = () => {
    return {
        type: userTypes.SIGN_OUT_USER_START
    }
};

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = userCredidentials => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredidentials
});

export const signUpUserSuccess = () => ({
    type: userTypes.SIGN_UP_USER_SUCCESS
});

export const userError = err => ({
    type: userTypes.USER_ERROR,
    payload: err
});

export const resetPasswordStart = (userCredidentials) => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: userCredidentials
});

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
});

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
});

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGNIN_START
});
