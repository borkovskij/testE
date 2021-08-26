import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
	FETCH_USER_PENDING,
	FETCH_USER_SUCCESS,
	NAVIGATE_HOME,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
	FETCH_USER_FAIL,
	UPDATE_USER_FAIL,
} from '../actions/user';
import { ROUTES } from '../constants';
import { getUserData, updateUserData } from '../services/user';
import { history } from '../store';

const getUsersList = (state) => state.users.users;

function* getUser({ payload }) {
	const usersList = yield select(getUsersList);
	if (usersList.length) {
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
	} else {
		yield call(navigateHome);
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

function userSaga() {
	return all([
		takeLatest(FETCH_USER_PENDING, getUser),
		takeLatest(UPDATE_USER_PENDING, updateUser),
		takeLatest(NAVIGATE_HOME, navigateHome),
	]);
}

export default userSaga;
