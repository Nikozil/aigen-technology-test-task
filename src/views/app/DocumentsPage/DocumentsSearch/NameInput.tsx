import { Form, Input } from 'antd';
import React from 'react';

const NameInput = () => {
  return (
    <Form.Item
      label="Название документа"
      name="name"
      // rules={[{ required: true, message: 'Please input your username!' }]}
      rules={[]}>
      <Input />
    </Form.Item>
  );
};

export default NameInput;
