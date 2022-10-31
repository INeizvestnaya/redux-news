import { ActionTypes } from '@/constants';

export const loadNews = () => ({ type: ActionTypes.LOAD_NEWS });

export const loadComments = (appLocation: typeof location) => ({
  type: ActionTypes.LOAD_NEWS_PAGE,
  payload: { newsId: +appLocation.pathname.split('/')[2] }
});

export const loadNestedComments = (comment: number) => ({
  type: ActionTypes.LOAD_NESTED_COMMENTS,
  payload: { comment }
});
