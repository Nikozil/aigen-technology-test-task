import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const CustomSpin: React.FC<ISpin> = ({ size = 35 }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: size, color: '#000' }} spin />
      }
    />
  );
};

export default CustomSpin;

interface ISpin {
  size?: number;
}
