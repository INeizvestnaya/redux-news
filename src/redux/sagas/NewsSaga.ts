import { call, put, spawn, takeLeading } from 'redux-saga/effects';

import { ActionTypes } from '@/constants';
import { NewsType } from '@/interfaces';
import sendRequest from '@/utils/sendRequest';

function* loadNews(id: number) {
  const newsItem: NewsType = yield call(
    sendRequest,
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  yield put({ type: ActionTypes.SET_NEWS, payload: { news: newsItem } });
}

function* LoadNewsListSaga() {
  yield put({ type: ActionTypes.LOAD_START });
  yield put({ type: ActionTypes.RESET_NEWS });

  let newsIds: number[] = yield call(
    sendRequest,
    'https://hacker-news.firebaseio.com/v0/newstories.json'
  );
  newsIds = newsIds.slice(400);

  yield put({ type: ActionTypes.LOAD_FINISH });

  for (let i = 0; i < newsIds.length; i++) {
    yield spawn(loadNews, newsIds[i]);
  }
}

export default function* loadWatcherSaga() {
  yield takeLeading(ActionTypes.LOAD_NEWS, LoadNewsListSaga);
}
