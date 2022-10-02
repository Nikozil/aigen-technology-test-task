import { Form, Select } from 'antd';

const { Option } = Select;
const OrderFilterInput = () => {
  return (
    <Form.Item label="Порядок" name="order">
      <Select style={{ width: 180 }} showArrow>
        <Option value="asc">По возрастанию </Option>
        <Option value="desc">По убыванию</Option>
      </Select>
    </Form.Item>
  );
};

export default OrderFilterInput;
