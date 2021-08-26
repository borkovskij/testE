import { all } from 'redux-saga/effects';
import userSaga from './user';
import usersSaga from './users';

// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([ usersSaga(), userSaga() ]);
}
