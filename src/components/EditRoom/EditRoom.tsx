import { Button, Col, Form, Input, Layout, Row, Space, Switch } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  editRoomByIdApi,
  getRoomToEditApi,
  RoomModel,
} from '../../redux/reducer/RoomReducer';

type Props = {};

const { Content } = Layout;
const { TextArea } = Input;

export default function EditRoom({}: Props) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { editRoom } = useSelector((state: RootState) => state.RoomReducer);
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: RoomModel) => {
    // console.log(values);
    const id = parseInt(params.id as string);
    dispatch(editRoomByIdApi({ id, ...values }));
    onReset();
  };

  useEffect(() => {
    const { id } = params;
    dispatch(getRoomToEditApi(parseInt(id as string)));
  }, [params.id]);

  useEffect(() => {
    if (editRoom) {
      form.setFieldsValue({
        tenPhong: editRoom.tenPhong,
        maViTri: editRoom.maViTri,
        khach: editRoom.khach,
        phongNgu: editRoom.phongNgu,
        giuong: editRoom.giuong,
        phongTam: editRoom.phongTam,
        giaTien: editRoom.giaTien,
        wifi: editRoom.wifi,
        bep: editRoom.bep,
        banLa: editRoom.banLa,
        banUi: editRoom.banUi,
        mayGiat: editRoom.mayGiat,
        tivi: editRoom.tivi,
        dieuHoa: editRoom.dieuHoa,
        doXe: editRoom.doXe,
        hoBoi: editRoom.hoBoi,
        moTa: editRoom.moTa,
      });
    }
  }, [params.id, editRoom]);

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
        <h3 className='content-title'>Chỉnh sửa thông tin phòng</h3>
      </div>
      <Form
        labelCol={{ span: 11 }}
        wrapperCol={{ span: 8 }}
        form={form}
        onFinish={onFinish}
        // initialValues={{
        //   wifi: false,
        //   tivi: false,
        //   bep: false,
        //   banLa: false,
        //   banUi: false,
        //   mayGiat: false,
        //   dieuHoa: false,
        //   hoBoi: false,
        //   doXe: false,
        // }}
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
            <Form.Item name='mayGiat' label='Máy giặt' valuePropName='checked'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='tivi' label='Tivi' valuePropName='checked'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='dieuHoa' label='Điều hoà' valuePropName='checked'>
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
          </Col>
        </Row>
      </Form>
    </Content>
  );
}
