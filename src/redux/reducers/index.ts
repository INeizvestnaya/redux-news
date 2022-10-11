import { State, Action, NewsType } from '../../types';
import { ActionTypes } from '../../constants';

const initialState = {
  newsData: [],
  loading: false,
  newsPage: {} as NewsType
};

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_NEWS:
      return { ...state, newsData: [...state.newsData, action.payload.news] };
    case ActionTypes.RESET_NEWS:
      return { ...state, newsData: [] };
    case ActionTypes.LOAD_START:
      return { ...state, loading: true };
    case ActionTypes.LOAD_FINISH:
      return { ...state, loading: false };
    case ActionTypes.SET_NEWS_PAGE:
      return {
        ...state,
        newsPage: action.payload.news
      };
    case ActionTypes.SET_COMMENTS: {
      if (state.newsPage.comments !== undefined) {
        return {
          ...state,
          newsPage: {
            ...state.newsPage,
            comments: [...state.newsPage.comments, action.payload.comment]
          }
        };
      } else {
        return {
          ...state,
          newsPage: {
            ...state.newsPage,
            comments: [action.payload.comment]
          }
        };
      }
    }
    case ActionTypes.SET_NESTED_COMMENTS:
      return {
        ...state,
        newsPage: {
          ...state.newsPage,
          comments: action.payload.newCommentsData
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
