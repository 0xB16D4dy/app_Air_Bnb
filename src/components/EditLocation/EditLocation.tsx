import { Button, Form, Input, Layout, Space } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  editLocationByIdApi,
  getLocationByIdApi,
} from '../../redux/reducer/locationReducer';

type Props = {};

const { Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export default function EditLocation({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const { editLocation } = useSelector(
    (state: RootState) => state.locationReducer
  );
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    const id = parseInt(params.id as string);
    dispatch(editLocationByIdApi({ id, ...values }));
    navigate(-1);
    onReset();
  };

  useEffect(() => {
    const { id } = params;
    dispatch(getLocationByIdApi(parseInt(id as string)));
  }, [params.id]);

  useEffect(() => {
    if (editLocation) {
      form.setFieldsValue({
        tenViTri: editLocation.tenViTri,
        tinhThanh: editLocation.tinhThanh,
        quocGia: editLocation.quocGia,
      });
    }
  }, [params.id, editLocation]);

  return (
    <Content
      className='site-content site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 650,
      }}
    >
      <div className='title'>
        <h3 className='content-title'>Chỉnh sửa vị trí</h3>
      </div>
      <Form {...formItemLayout} onFinish={onFinish} form={form}>
        <Form.Item
          label='Tên vị trí'
          name={'tenViTri'}
          rules={[
            {
              required: true,
              message: 'Please input name of location',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Tỉnh thành'
          name={'tinhThanh'}
          rules={[
            {
              required: true,
              message: 'Please input province of location',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Quốc gia'
          name={'quocGia'}
          rules={[
            {
              required: true,
              message: 'Please input country of location',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 5 }}>
          <Space size={'middle'}>
            <Button type='primary' htmlType='submit'>
              Edit Location
            </Button>
            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Content>
  );
}
