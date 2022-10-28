import { FormOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Switch, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';

type Props = {};

const { TextArea } = Input;

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function ModalAddRoom({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
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
        title='Add new room'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
          form={form}
          onFinish={onFinish}
        >
          <Row gutter={32}>
            <Col span={24}>
              <Form.Item
                label='Tên phòng'
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 20, offset: 0 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Mã vị trí'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Khách'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Giường'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Phòng ngủ'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Phòng tắm'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Giá tiền'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='wifi' label='Wifi' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='bep' label='Bếp' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='banLa' label='Bàn là' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='banUi' label='Bàn ủi' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='mayGiat'
                label='Máy giặt'
                valuePropName='checked'
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='tivi' label='Tivi' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='dieuHoa'
                label='Điều hoà'
                valuePropName='checked'
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='doXe' label='Đỗ xe' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='hoBoi' label='Hồ bơi' valuePropName='checked'>
                <Switch />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name='upload'
                label='Upload hình ảnh'
                valuePropName='fileList'
                getValueFromEvent={normFile}
                extra='Extension jpg, png,...'
                wrapperCol={{ span: 16, offset: 1 }}
                labelCol={{ span: 4 }}
              >
                <Upload name='logo' action='/upload.do' listType='picture'>
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                wrapperCol={{ span: 16, offset: 3 }}
                labelCol={{ span: 2 }}
                label='Mô tả'
                name='moTa'
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
