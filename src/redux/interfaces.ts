import { ActionTypes } from '../constants';
import { Comment,NewsType } from '../interfaces';

export interface State {
  newsData: NewsType[];
  loading: boolean;
  newsPage: NewsType;
}

export interface LoadStart {
  type: ActionTypes.LOAD_START;
}

export interface LoadFinish {
  type: ActionTypes.LOAD_FINISH;
}

export interface SetNews {
  type: ActionTypes.SET_NEWS;
  payload: { news: NewsType };
}

export interface LoadNewsPage {
  type: ActionTypes.LOAD_NEWS_PAGE;
  payload: { newsId: number };
}

export interface SetNewsPage {
  type: ActionTypes.SET_NEWS_PAGE;
  payload: { news: NewsType };
}

export interface ResetNews {
  type: ActionTypes.RESET_NEWS;
}

export interface LoadComments {
  type: ActionTypes.LOAD_COMMENTS;
  payload: { ids: number[] };
}

export interface SetComments {
  type: ActionTypes.SET_COMMENTS;
  payload: { comment: Comment };
}

export interface LoadNested {
  type: ActionTypes.LOAD_NESTED_COMMENTS;
  payload: { comment: number };
}

export interface SetNested {
  type: ActionTypes.SET_NESTED_COMMENTS;
  payload: { newCommentsData: Comment[] };
}

export type Action =
  | LoadStart
  | LoadFinish
  | SetNews
  | LoadNewsPage
  | SetNewsPage
  | ResetNews
  | LoadComments
  | SetComments
  | LoadNested
  | SetNested;
