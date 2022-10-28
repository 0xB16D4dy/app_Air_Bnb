import React, { useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  getLocationApi,
  LocationModel,
} from '../../redux/reducer/locationReducer';
import ModalUploadLocation from '../ModalUploadLocation/ModalUploadLocation';

type Props = {};

const scroll: { y?: number | string } = {};
scroll.y = 400;

export default function TableLocation({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { arrLocation } = useSelector(
    (state: RootState) => state.locationReducer
  );

  const onDelete = ({ id }: any) => {
    console.log(id);
  };
  const onEdit = ({ id }: any) => {
    console.log(id);
  };

  const columns: ColumnsType<LocationModel> = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: 'Tên vị trí',
      dataIndex: 'tenViTri',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      width: 300,
      render: (item, _, index) => {
        return (
          <div key={index}>
            <Space size={'middle'}>
              <img src={item} alt={item} width={150} height={100} />
            <ModalUploadLocation/>
            </Space>
          </div>
        );
      },
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'tinhThanh',
    },
    {
      title: 'Quốc gia',
      dataIndex: 'quocGia',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record, index) => (
        <Space size='middle' key={index}>
          <Button
            icon={<EditOutlined />}
            type='text'
            onClick={() => {
              onEdit(record);
            }}
            style={{ color: '#1890ff' }}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            type='text'
            onClick={() => {
              onDelete(record);
            }}
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getLocationApi());
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={arrLocation}
      size='middle'
      pagination={{
        pageSize: 5,
        showSizeChanger:false,
      }}
      scroll={scroll}
    />
  );
}
