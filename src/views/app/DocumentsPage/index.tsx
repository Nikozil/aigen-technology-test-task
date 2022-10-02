import React from 'react';
import DocumentsList from './DocumentsList';
import DocumentsSearch from './DocumentsSearch';

const DocumentsPage = () => {
  return (
    <article className="documents-page">
      <DocumentsSearch />
      <DocumentsList />
    </article>
  );
};

export default DocumentsPage;
