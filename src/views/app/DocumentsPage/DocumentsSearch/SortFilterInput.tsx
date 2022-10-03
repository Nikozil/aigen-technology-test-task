import { Form, Select } from 'antd';

const { Option } = Select;

const SortFilterInput = () => {
  return (
    <Form.Item
      label="Сортировка"
      name="sort"
      // rules={[{ required: true, message: 'Please input your username!' }]}
      rules={[]}>
      <CustomSelect />
    </Form.Item>
  );
};

export default SortFilterInput;

const CustomSelect: React.FC<CustomSelectProps> = ({
  value = '',
  onChange = () => {},
}) => {
  // const handleClear = () => {
  //   onChange('id');
  // };

  return (
    <Select
      style={{ width: 180 }}
      showArrow
      allowClear
      placeholder="Без сортировки"
      value={value}
      // onClear={handleClear}
      onChange={onChange}>
      <Option value="id">ID документа</Option>
      <Option value="name">Название</Option>
      <Option value="date_start">Дата начала</Option>
      <Option value="date_end">Дата окончания</Option>
    </Select>
  );
};

interface CustomSelectProps {
  value?: string;
  onChange?: (value: string) => void;
}
