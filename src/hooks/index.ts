import { TypedUseSelectorHook,useSelector } from 'react-redux';

import rootReducer from '../redux/reducers';

type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
