import React from 'react';
import Loading from './Loading';

const LoadingHoc: React.FC<LoadingHocProps> = ({ loading, children }) => {
  return <>{loading ? <Loading /> : <>{children}</>}</>;
};

export default LoadingHoc;

interface LoadingHocProps {
  loading: boolean;
  children: React.ReactNode;
}
