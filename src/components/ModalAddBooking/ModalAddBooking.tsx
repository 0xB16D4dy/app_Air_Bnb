import { FormOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';

type Props = {};

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

export default function ModalAddBooking({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();

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
      ngayDen: values['ngayDen'],
      ngayDi: values['ngayDi'],
    });
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
        title='Add new booking'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Form
          {...formItemLayout}
          onFinish={onFinish}
          form={form}
          name={'addBooking'}
        >
          <Form.Item label='Mã phòng' name={'maPhong'}>
            <Input />
          </Form.Item>
          <Form.Item label='Mã người dùng' name={'maNguoiDung'}>
            <Input />
          </Form.Item>
          <Form.Item label='Ngày đến' name={'ngayDen'}>
            <DatePicker format={'DD/MM/YYYY'} placeholder='Chọn ngày đến' />
          </Form.Item>
          <Form.Item label='Ngày đi' name={'ngayDi'}>
            <DatePicker format={'DD/MM/YYYY'} placeholder='Chọn ngày đi' />
          </Form.Item>
          <Form.Item label='Số lượng khách' name={'soLuongKhach'}>
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 5, span: 12 }}>
            <Button type='primary' block htmlType='submit'>
              Add booking
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
