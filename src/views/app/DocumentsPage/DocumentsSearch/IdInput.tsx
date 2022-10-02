import { Form, Input } from 'antd';
import React from 'react';

const IdInput = () => {
  return (
    <Form.Item
      label="ID документа"
      name="id"
      rules={[
        // { min: 11, max: 11, message: 'UUID должен содержать 11 символов' },
        {
          pattern: /\d\d\d-\d\d\d-\d\d\d/,
          message: 'UUID имеет формат: 111-111-111 (только цифры)',
        },
      ]}>
      <Input />
    </Form.Item>
  );
};

export default IdInput;
