import { documentsApi } from 'redux/services/documentsApi';

const reducers = {
  [documentsApi.reducerPath]: documentsApi.reducer,
};

export default reducers;
