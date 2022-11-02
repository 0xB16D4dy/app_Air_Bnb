import { FormOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';
import { createLocationApi } from '../../redux/reducer/locationReducer';

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

export default function ModalAddLocation({}: Props) {
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
    onReset();
  };
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    // console.log(values);
    dispatch(createLocationApi(values));
    onReset();
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
        title='Add new location'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
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
              // {
              //   pattern: new RegExp(
              //     '^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$'
              //   ),
              //   message:
              //     'Input contains only characters without numbers or spaces',
              // },
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
          <Form.Item name='hinhAnh' label='Link hình ảnh'>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 8, offset: 6 }}>
            <Button type='primary' htmlType='submit' block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
