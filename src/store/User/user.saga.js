import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userError, resetPasswordSuccess } from './user.actions';
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from './../../firebase/utils';
import { handleResetPasswordAPI } from './user.helper';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
    const userRef = yield call(handleUserProfile, { userAuth: user, additionalData: additionalData });
    const snapshot = yield userRef.get();

    yield put(
        signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        })
    );
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        //console.log(err);
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (err) {
        //console.log(err);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}


export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        );
    } catch (error) {
        console.log(error);
    }
};

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUserStart({ payload: { firstname, lastname, email, password, confirmpassword } }) {
    console.log(password + ", " + confirmpassword);
    if (password !== confirmpassword) {
        const err = (["Password don't match"]);
        yield put(
            userError(err)
        );
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName: firstname + " " + lastname, firstname, lastname, email, password }
        yield getSnapshotFromUserAuth(user, additionalData);
    } catch (err) {
        //console.log(err);
    }
}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUserStart);
}

export function* resetPasswordStart({ payload: { email } }) {
    if (email === '') {
        const err = ["Please enter the valid email id!"];
        yield put(
            userError(err)
        );
        return;
    }

    try {
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        );
    } catch (err) {
        yield put(
            userError(err)
        );
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPasswordStart);
}

export function* googleSignInStart() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        //console.log(err);
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignInStart);
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGoogleSignInStart)
    ]);
};