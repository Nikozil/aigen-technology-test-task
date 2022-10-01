import { configureStore } from '@reduxjs/toolkit';
import { documentsApi } from 'redux/services/documentsApi';
import reducers from '../reducers';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(documentsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
