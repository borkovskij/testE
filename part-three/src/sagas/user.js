import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	CHANGE_PAGE,
	FETCH_USER_FAIL,
	FETCH_USER_PENDING,
	FETCH_USER_SUCCESS,
	NAVIGATE_HOME,
	UPDATE_USER_FAIL,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
} from '../actions/user';
import { getUserData, updateUserData } from '../services/user';
import { history } from '../store';
import { ROUTES } from '../constants';

function* getUser({ payload }) {
	const { userId } = payload;
	try {
		const data = yield call(getUserData, userId);
		yield put({
			type: FETCH_USER_SUCCESS,
			payload: { user: data.data },
		});
	} catch (e) {
		yield put({
			type: FETCH_USER_FAIL,
		});
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
		yield call(history.push, ROUTES.CONFIRMATION_ROUTE);
	} catch (e) {
		yield put({
			type: UPDATE_USER_FAIL,
		});
	}
}

function* navigateHome() {
	yield call(history.push, ROUTES.USERS_ROUTE);
}

function* changePage({ payload }) {
	const { path } = payload;
	yield call(history.push, path);
}

function userSaga() {
	return all([
		takeLatest(FETCH_USER_PENDING, getUser),
		takeLatest(UPDATE_USER_PENDING, updateUser),
		takeLatest(NAVIGATE_HOME, navigateHome),
		takeLatest(CHANGE_PAGE, changePage),
	]);
}

export default userSaga;
