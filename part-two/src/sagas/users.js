import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USERS_LIST_FAIL, USERS_LIST_PENDING, USERS_LIST_SUCCESS } from '../actions/users';
import { getUsersList } from '../services/users';

function* getUsers({ payload }) {
	const { page } = payload;

	try {
		const data = yield call(getUsersList, page);
		yield put({
			type: USERS_LIST_SUCCESS,
			payload: {
				users: data.data,
				pagination: {
					page: data.page,
					totalPages: data.total_pages,
					perPage: data.per_page,
					total: data.total,
				},
			},
		});
	} catch (e) {
		yield put({
			type: USERS_LIST_FAIL,
		});
	}
}

function usersSaga() {
	return all([ takeLatest(USERS_LIST_PENDING, getUsers) ]);
}

export default usersSaga;
