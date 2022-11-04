import React, { useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  deleteLocationApi,
  getLocationApi,
  LocationModel,
} from '../../redux/reducer/locationReducer';
import ModalUploadLocation from '../ModalUploadLocation/ModalUploadLocation';
import { useNavigate } from 'react-router-dom';

type Props = {};

const scroll: { y?: number | string } = {};
scroll.y = 580;

export default function TableLocation({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { arrLocation } = useSelector(
    (state: RootState) => state.locationReducer
  );

  const onDelete = ({ id }: any) => {
    // console.log(id);
    dispatch(deleteLocationApi(id));
  };
  const onEdit = ({ id }: any) => {
    navigate(`/admin/edit-location/${id}`);
    // console.log(id);
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
      render: (item, record, index) => {
        return (
          <div key={index}>
            <Space size={'middle'}>
              <img src={item} alt={item} width={150} height={100} />
              <ModalUploadLocation id={record.id} defaultImage={item}/>
            </Space>
          </div>
        );
      },
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'tinhThanh',
      responsive: ['md'],
    },
    {
      title: 'Quốc gia',
      dataIndex: 'quocGia',
      responsive: ['md'],
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
        showSizeChanger: false,
      }}
      scroll={scroll}
    />
  );
}
