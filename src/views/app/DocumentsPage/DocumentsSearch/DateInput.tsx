import 'moment/locale/ru';

import { DatePicker, Form } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

const DateInput = () => {
  return (
    <Form.Item
      label="Название документа"
      name="date"
      // rules={[{ required: true, message: 'Please input your username!' }]}
      rules={[]}>
      <RangePicker />
    </Form.Item>
  );
};

export default DateInput;
