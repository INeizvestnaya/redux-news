import { all } from 'redux-saga/effects';

import nestedCommentsWatcherSaga from './NestedCommentsSaga';
import newsPageWatcherSaga from './NewsPageSaga';
import loadWatcherSaga from './NewsSaga';

export default function* rootSaga() {
  yield all([
    loadWatcherSaga(),
    newsPageWatcherSaga(),
    nestedCommentsWatcherSaga()
  ]);
}
