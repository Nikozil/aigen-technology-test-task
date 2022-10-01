import LoadingHoc from 'components/shared-components/LoadingHoc';
import { useAppSelector } from 'hooks/redux-hooks';
import { useState } from 'react';
import { selectSearchData } from 'redux/selectors/documents';
import { useGetDocumentsQuery } from 'redux/services/documentsApi';
import DocumentItem from './DocumentItem';
import Paginator from './Paginator';

const DocumentsList = () => {
  const { page } = useAppSelector(selectSearchData);

  const { data, isLoading, isFetching } = useGetDocumentsQuery({
    _page: page,
  });

  const [showDetailsId, setShowDetailsId] = useState<showDetailsIdType>(null);

  return (
    <section className="document-list">
      <LoadingHoc loading={isLoading}>
        <div className="document-list__list">
          <LoadingHoc loading={isFetching}>
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
