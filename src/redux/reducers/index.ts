import { documentsApi } from 'redux/services/documentsApi';
import documents from './documents';

const reducers = {
  documents: documents,
  [documentsApi.reducerPath]: documentsApi.reducer,
};

export default reducers;
