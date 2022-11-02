import { FormOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Switch, Upload } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';
import { createRoomApi, RoomModel } from '../../redux/reducer/RoomReducer';

type Props = {};

const { TextArea } = Input;

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

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: RoomModel) => {
    dispatch(createRoomApi(values));
    setIsModalOpen(false);
    onReset();
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
        width={900}
        centered
      >
        <Form
          labelCol={{ span: 11 }}
          wrapperCol={{ span: 8 }}
          form={form}
          onFinish={onFinish}
          initialValues={{
            wifi: false,
            tivi: false,
            bep: false,
            banLa: false,
            banUi: false,
            mayGiat: false,
            dieuHoa: false,
            hoBoi: false,
            doXe: false,
          }}
        >
          <Row gutter={32}>
            <Col span={24}>
              <Form.Item
                label='Tên phòng'
                name={'tenPhong'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Mã vị trí'
                name={'maViTri'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Khách'
                name={'khach'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Phòng ngủ'
                name={'phongNgu'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Giường'
                name={'giuong'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Phòng tắm'
                name={'phongTam'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Giá tiền'
                name={'giaTien'}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 16, offset: 2 }}
                rules={[
                  {
                    required: true,
                    message: 'Please input this field',
                  },
                ]}
              >
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
                name='hinhAnh'
                label='Link hình ảnh'
                wrapperCol={{ span: 16, offset: 1 }}
                labelCol={{ span: 4 }}
              >
                <Input />
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
