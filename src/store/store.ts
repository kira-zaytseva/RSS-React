import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import searchReducer from './reducers/SearchSlice';
import { galleryApi } from '../API/galleryService';

const rootReducer = combineReducers({
  userReducer,
  searchReducer,
  [galleryApi.reducerPath]: galleryApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(galleryApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
