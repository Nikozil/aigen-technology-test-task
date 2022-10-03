import LoadingHoc from 'components/shared-components/LoadingHoc';
import { useAppSelector } from 'hooks/redux-hooks';
import { useDebounce } from 'hooks/useDebounce';
import { useState } from 'react';
import { selectApiSearchData } from 'redux/selectors/documents';
import { useGetDocumentsQuery } from 'redux/services/documentsApi';
import DocumentItem from './DocumentItem';
import Paginator from './Paginator';

const DocumentsList = () => {
  const searchData = useAppSelector(selectApiSearchData);

  const debounceSearch = useDebounce(searchData, 400);

  const { data, isLoading, isFetching } = useGetDocumentsQuery(debounceSearch);

  const [showDetailsId, setShowDetailsId] = useState<showDetailsIdType>(null);

  const isEmptyData = data?.documents.length === 0;
  return (
    <section className="document-list">
      <LoadingHoc loading={isLoading}>
        <div className="document-list__list">
          <LoadingHoc loading={isFetching}>
            {isEmptyData && (
              <div className="document-list__empty-attention">
                Документ не найден
              </div>
            )}
            {data?.documents.map((document) => (
              <DocumentItem
                key={document.id}
                document={document}
                showDetailsId={showDetailsId}
                setShowDetailsId={setShowDetailsId}
              />
            ))}
          </LoadingHoc>
        </div>
        <Paginator total={data?.totalCount} />
      </LoadingHoc>
    </section>
  );
};

export default DocumentsList;

export type showDetailsIdType = string | null;
