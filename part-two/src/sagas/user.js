import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import {
	FETCH_USER_PENDING,
	FETCH_USER_SUCCESS,
	NAVIGATE_HOME,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
} from '../actions/user';
import { getUserData, updateUserData } from '../services/user';
import { history } from '../store';

function* getUser({ payload }) {
	const { userId } = payload;
	try {
		const data = yield call(getUserData, userId);
		yield put({
			type: FETCH_USER_SUCCESS,
			payload: { user: data.data },
		});
	} catch (e) {
		console.log(e);
	}
}

function* updateUser({ payload }) {
	const { userData } = payload;
	try {
		const data = yield call(updateUserData, userData);
		yield put({
			type: UPDATE_USER_SUCCESS,
			payload: {
				userData: data,
			},
		});
		yield call(history.push, '/confirmation');
	} catch (e) {
		console.log(e);
	}
}

function* navigateHome() {
	yield call(history.push, '/users');
}

function userSaga() {
	return all([
		takeEvery(FETCH_USER_PENDING, getUser),
		takeEvery(UPDATE_USER_PENDING, updateUser),
		takeEvery(NAVIGATE_HOME, navigateHome),
	]);
}

export default userSaga;
