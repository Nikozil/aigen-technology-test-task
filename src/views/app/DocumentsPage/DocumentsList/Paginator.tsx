import { Pagination } from 'antd';
import { DOCUMENTS_PER_PAGE } from 'constants/documents';
import { useAppDispatch } from 'hooks/redux-hooks';
import React from 'react';
import { setPage } from 'redux/reducers/documents';

const Paginator: React.FC<PaginatorProps> = ({ total }) => {
  const dispatch = useAppDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="document-pagination">
      <Pagination
        defaultCurrent={1}
        total={total || 0}
        pageSize={DOCUMENTS_PER_PAGE}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Paginator;

interface PaginatorProps {
  total: number | undefined;
}
