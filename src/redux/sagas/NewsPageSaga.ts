import { call, put, takeLeading, spawn, join } from 'redux-saga/effects';
import sendRequest from '../../utils/sendRequest';
import { ActionTypes } from '../../constants';
import { LoadNewsPage, NewsType, Comment } from './../../types';

function* loadComments(id: number) {
  const comment: Comment = yield call(
    sendRequest,
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  yield put({ type: ActionTypes.SET_COMMENTS, payload: { comment } });
}

function* loadNewsPageSaga(action: LoadNewsPage): any {
  yield put({ type: ActionTypes.LOAD_START });

  const news: NewsType = yield call(
    sendRequest,
    `https://hacker-news.firebaseio.com/v0/item/${action.payload.newsId}.json`
  );
  yield put({ type: ActionTypes.SET_NEWS_PAGE, payload: { news } });

  const comments = news.kids;
  let spawnRes;
  if (comments !== undefined) {
    for (let i = 0; i < comments.length; i++) {
      spawnRes = yield spawn(loadComments, comments[i]);
    }
    yield join(spawnRes);
  }

  yield put({ type: ActionTypes.LOAD_FINISH });
}

export default function* newsPageWatcherSaga() {
  yield takeLeading(ActionTypes.LOAD_NEWS_PAGE, loadNewsPageSaga);
}
