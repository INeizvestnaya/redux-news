import { Task } from 'redux-saga';
import {
  call,
  join,
  put,
  select,
  spawn,
  takeLeading} from 'redux-saga/effects';

import { ActionTypes } from '@/constants';
import { Comment } from '@/interfaces';
import sendRequest from '@/utils/sendRequest';

import { LoadNested, State } from '../interfaces';

let kids: number[] | undefined;

function findAdInsertNested(
  comments: Comment[] | Comment,
  commentId: number,
  nested?: Comment[]
) {
  if (comments instanceof Array) {
    comments.forEach((item) => {
      findAdInsertNested(item, commentId, nested);
    });
  } else {
    if (comments.id === commentId) {
      kids = comments.kids;

      if (nested) {
        comments.nestedComments = nested;
      }
    }

    if (Object.keys(comments).includes('nestedComments')) {
      findAdInsertNested(comments.nestedComments, commentId, nested);
    }
  }
}

function* loadComments(id: number) {
  const comment: Comment = yield call(
    sendRequest,
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return comment;
}

function* loadNestedCommentsSaga(action: LoadNested) {
  const comments: Comment[] = yield select(
    (state: State) => state.newsPage.comments
  );

  findAdInsertNested(comments, action.payload.comment);

  const nestedComments: Comment[] = [];
  if (kids) {
    for (let i = 0; i < kids.length; i++) {
      const task: Task = yield spawn(loadComments, kids[i]);
      const nested: Comment = yield join(task);
      nestedComments.push(nested);
    }

    const newCommentsData = [...comments];
    findAdInsertNested(newCommentsData, action.payload.comment, nestedComments);

    yield put({
      type: ActionTypes.SET_NESTED_COMMENTS,
      payload: { newCommentsData }
    });
  }
}

function* nestedCommentsWatcherSaga() {
  yield takeLeading(ActionTypes.LOAD_NESTED_COMMENTS, loadNestedCommentsSaga);
}

export default nestedCommentsWatcherSaga;
