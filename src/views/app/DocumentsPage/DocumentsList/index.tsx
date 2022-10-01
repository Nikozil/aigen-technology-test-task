import React, { useState } from 'react';
import { useGetDocumentsQuery } from 'redux/services/documentsApi';
import DocumentItem from './DocumentItem';
import Loading from 'components/shared-components/Loading';

const DocumentsList = () => {
  const { data, error, isLoading } = useGetDocumentsQuery({ _page: 1 });
  const [showDetailsId, setShowDetailsId] = useState<showDetailsIdType>(null);
  return (
    <section className="document-list">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="document-list__list">
          {data?.map((document) => (
            <DocumentItem
              key={document.id}
              document={document}
              showDetailsId={showDetailsId}
              setShowDetailsId={setShowDetailsId}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DocumentsList;

export type showDetailsIdType = string | null;
