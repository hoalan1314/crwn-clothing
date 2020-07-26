import {takeLatest, put, all, call} from 'redux-saga/effects'

import UserActionTypes from "./user.types";
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure} from "./user.actions";
import {clearCart} from "../cart/cart.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try{
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
    yield put(clearCart())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}
/**
 * Listening for GOOGLE_SIGN_IN_START
 * @returns {Generator<<"FORK", ForkEffectDescriptor>, void, *>}
 */
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

/**
 * Listening for EMAIL_SIGN_IN_START
 * @returns {Generator<<"FORK", ForkEffectDescriptor>, void, *>}
 */
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ])
}
