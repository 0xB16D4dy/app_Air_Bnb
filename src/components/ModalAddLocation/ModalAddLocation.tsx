import { FormOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';

type Props = {}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

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
    };

    const onFinish = (values: any) => {
      console.log({
        ...values,
        birthday: values['birthday'].format('DD/MM/YYYY'),
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
        title='Add new location'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <Form {...formItemLayout} onFinish={onFinish} form={form}>
          <Form.Item label='Tên vị trí' name={'tenViTri'}>
            <Input/>
          </Form.Item>
          <Form.Item label='Tỉnh thành' name={'tinhThanh'}>
            <Input/>
          </Form.Item>
          <Form.Item label='Quốc gia' name={'quocGia'}>
            <Input/>
          </Form.Item>
          <Form.Item
        name="upload"
        label="Upload hình ảnh"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Extension jpg, png,..."
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button  icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 6 }}>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
      
        </Form>
      </Modal>
    </div>
  )
}