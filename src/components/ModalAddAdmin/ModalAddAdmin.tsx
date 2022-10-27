import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Radio, Select } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import moment from 'moment';
import { AppDispatch } from '../../redux/configStore';
import { useDispatch } from 'react-redux';
import { createUserByRoleAdminApi } from '../../redux/reducer/managementUserReducer';

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

export default function ModalAddAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e: any) => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log({
      ...values,
      birthday: values['birthday'].format('DD/MM/YYYY'),
    });
    dispatch(
      createUserByRoleAdminApi({
        ...values,
        birthday: values['birthday'].format('DD/MM/YYYY'),
      })
    );
    setIsModalOpen(false);
  };

  return (
    <div className='modal-add-admin'>
      <Button
        type='primary'
        htmlType='button'
        className='btn-add-admin'
        icon={<FormOutlined />}
        onClick={showModal}
      ></Button>
      <Modal
        title='Add User'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Form
          {...formItemLayout}
          layout='horizontal'
          size={'middle'}
          onFinish={onFinish}
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
            <Input />
          </Form.Item>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                pattern: /^[a-zA-Z]{6,18}$/,
                message: 'The input is not valid name!',
              },
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Phone'
            rules={[
              { required: true, message: 'Please input your phone number!' },
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
              style={{ width: '180px' }}
            />
          </Form.Item>
          <Form.Item
            name='gender'
            label='Gender'
            rules={[{ required: true, message: 'Please select gender!' }]}
            initialValue={'true'}
          >
            <Select allowClear placeholder='select your gender'>
              <Select.Option value='true'>male</Select.Option>
              <Select.Option value='false'>female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='role'
            label='Role'
            rules={[{ required: true, message: 'Please select Role!' }]}
            initialValue={'USER'}
          >
            <Select allowClear placeholder='select your Role'>
              <Select.Option value='USER'>user</Select.Option>
              <Select.Option value='ADMIN'>Admin</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
            <Button type='primary' htmlType='submit' style={{ width: '120px' }}>
              Add User
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
