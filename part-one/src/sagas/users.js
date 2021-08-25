import { all, call, put, takeEvery } from 'redux-saga/effects';
import { GET_PAGINATION } from '../actions/pagination';
import { USERS_LIST_PENDING, USERS_LIST_SUCCESS } from '../actions/users';
import { getUsersList } from '../services/users';

function* getUsers({ payload }) {
	const { page } = payload;
	try {
		const data = yield call(getUsersList, page);
		yield put({
			type: GET_PAGINATION,
			payload: {
				page: data.page,
				totalPages: data.total_pages,
				perPage: data.per_page,
				total: data.total,
			},
		});
		yield put({
			type: USERS_LIST_SUCCESS,
			payload: { users: data.data },
		});
	} catch (e) {
		console.log(e);
	}
}

function usersSaga() {
	return all([ takeEvery(USERS_LIST_PENDING, getUsers) ]);
}

export default usersSaga;
