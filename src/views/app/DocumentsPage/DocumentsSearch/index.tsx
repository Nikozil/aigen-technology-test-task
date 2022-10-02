import { Col, Form, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useEffect } from 'react';
import { changeSearchData, searchPayload } from 'redux/reducers/documents';
import { selectSearchData } from 'redux/selectors/documents';
import DateInput from './DateInput';
import IdInput from './IdInput';
import NameInput from './NameInput';
import OrderFilterInput from './OrderFilterInput';
import SortFilterInput from './SortFilterInput';
import moment from 'moment';
const DATE_FORMAT = 'YYYY-MM-DD';

const DocumentsSearch = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const searchData = useAppSelector(selectSearchData);

  useEffect(() => {
    form.setFieldsValue({
      ...searchData,
      date:
        searchData.date_start && searchData.date_end
          ? [
              moment(searchData.date_start, DATE_FORMAT),
              moment(searchData.date_end, DATE_FORMAT),
            ]
          : null,
    });
  }, [form, searchData]);

  const handleValuesChangeForm = (changedValue: object) => {
    const [[key, value]] = Object.entries(changedValue);
    console.log(key, value);

    if (key === 'date') {
      const date_start = value ? value[0].format(DATE_FORMAT) : undefined;
      const date_end = value ? value[1].format(DATE_FORMAT) : undefined;

      const payload_date_start = {
        key: 'date_start',
        value: date_start,
      } as searchPayload;

      const payload_date_end = {
        key: 'date_end',
        value: date_end,
      } as searchPayload;

      dispatch(changeSearchData(payload_date_start));
      dispatch(changeSearchData(payload_date_end));
      console.log(date_start);

      return;
    }

    const payload = { key, value } as searchPayload;

    form
      .validateFields()
      .then(() => {
        dispatch(changeSearchData(payload));
      })
      .catch((err) => {
        if (!err.errorFields.length) {
          console.log('fire');

          dispatch(changeSearchData(payload));
        }
      });
  };

  return (
    <section className="document-search">
      <Form
        form={form}
        name="search-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ sort: 'id' }}
        onValuesChange={handleValuesChangeForm}
        layout={'vertical'}
        autoComplete="off">
        <IdInput />
        <DateInput />
        <NameInput />
        <Row gutter={16}>
          <Col>
            <SortFilterInput />
          </Col>
          <Col>
            <OrderFilterInput />
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default DocumentsSearch;
