import React from 'react';
import { Document } from 'types/Documents';
import { showDetailsIdType } from '.';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const DocumentItem: React.FC<DocumentItemProps> = ({
  document,
  showDetailsId,
  setShowDetailsId,
}) => {
  const { name, id, date_start, date_end, description } = document;

  const showDetails = showDetailsId === id;

  const handleShowDetails = () => {
    const payload = showDetails ? null : id;
    setShowDetailsId(payload);
  };

  return (
    <section className="document-item">
      <div onClick={handleShowDetails} className="document-item__title">
        <div className="document-item__name">{`<${name}>`}</div>

        <div className="document-item__icon">
          {showDetails ? <UpOutlined /> : <DownOutlined />}
        </div>
      </div>

      {showDetails && (
        <div className="document-item__dropdown">
          <div className="document-item__id">{id}</div>

          <div className="document-item__description">{description}</div>

          <div className="document-item__date">{`${date_start} ${date_end}`}</div>
        </div>
      )}
    </section>
  );
};

export default DocumentItem;

interface DocumentItemProps {
  document: Document;
  showDetailsId: showDetailsIdType;
  setShowDetailsId: (id: showDetailsIdType) => void;
}
