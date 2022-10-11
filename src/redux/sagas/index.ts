import { all } from 'redux-saga/effects';
import loadWatcherSaga from './NewsSaga';
import newsPageWatcherSaga from './NewsPageSaga';
import nestedCommentsWatcherSaga from './NestedCommentsSaga';

export default function* rootSaga() {
  yield all([
    loadWatcherSaga(),
    newsPageWatcherSaga(),
    nestedCommentsWatcherSaga()
  ]);
}
