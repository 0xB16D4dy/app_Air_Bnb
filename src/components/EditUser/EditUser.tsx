import React, { useEffect } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Space,
} from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import {
  EditUserModal,
  editUserByIdApi,
  getUserByIdApi,
} from '../../redux/reducer/managementUserReducer';
import moment from 'moment';

const { Content } = Layout;
const { Option } = Select;

type Props = {};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export default function EditUser({}: Props) {
  const params = useParams();
  const { userEdit } = useSelector(
    (state: RootState) => state.managementUserReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // console.log('Received values of form: ', {
    //   ...values,
    //   birthday: values['birthday'].format('DD/MM/YYYY'),
    // });

    const id = params.id as string;
    const data = {
      id,
      value: { ...values, birthday: values['birthday'].format('DD/MM/YYYY') },
    };
    dispatch(editUserByIdApi(data));
  };

  useEffect(() => {
    const { id } = params;
    dispatch(getUserByIdApi(id));
  }, []);

  useEffect(() => {
    if (userEdit) {
      form.setFieldsValue({
        email: userEdit.email,
        name: userEdit.name,
        phone: userEdit.phone,
        gender: userEdit.gender,
        birthday:
          userEdit.birthday !== ''
            ? moment(userEdit.birthday, 'DD/MM/YYYY')
            : '',
        role: userEdit.role,
      });
    }
  }, [userEdit.id]);

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
        <h3 className='content-title'>Chỉnh sửa user</h3>
      </div>
      <Form
        {...formItemLayout}
        name='editUser'
        onFinish={onFinish}
        size={'middle'}
        form={form}
        initialValues={{ birthday: moment() }}
      >
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name='name'
          label='Name'
          tooltip='What do you want others to call you?'
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
            },
            {
              pattern: /^[a-zA-Z]{6,18}$/,
              message: 'The input is not valid name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { pattern: /^0.\d{1,9}$/, message: 'Phone number invalid' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='birthday'
          label='Birthday'
          rules={[{ required: true, message: 'Please input your Birthday!' }]}
        >
          <DatePicker
            format={'DD/MM/YYYY'}
            placeholder='select your birthday'
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name='gender'
          label='Gender'
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder='select your gender'>
            <Option value={true}>Male</Option>
            <Option value={false}>Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='role'
          label='Role'
          rules={[{ required: true, message: 'Please select role!' }]}
        >
          <Select placeholder='select your role'>
            <Option value='USER'>USER</Option>
            <Option value='ADMIN'>ADMIN</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 4 }}>
          <Space size={'middle'}>
            <Button type='primary' htmlType='submit'>
              Edit User
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
