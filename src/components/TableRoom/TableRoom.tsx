import React, { useEffect } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getAllRoomApi, RoomModel } from '../../redux/reducer/RoomReducer';
import ModalUploadRoom from '../ModalUploadRoom/ModalUploadRoom';

type Props = {};

const scroll: { y?: number | string } = {};
scroll.y = 580;

export default function TableRoom({}: Props) {
  const { arrAllRoom } = useSelector((state: RootState) => state.RoomReducer);
  const dispatch: AppDispatch = useDispatch();

  const onDelete = ({ id }: any) => {
    console.log(id);
  };
  const onEdit = ({ id }: any) => {
    console.log(id);
  };

  const columns: ColumnsType<RoomModel> = [
    {
      title: 'Id',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: 'Tên phòng',
      dataIndex: 'tenPhong',
      width: 200,
      render: (item, _, index) => {
        return (
          <div
            key={index}
            style={{ textOverflow: 'ellipsis', color: '#222222' }}
          >
            {item}
          </div>
        );
      },
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      width: 200,
      render: (item, _, index) => {
        return (
          <div key={index}>
            <Space size={'middle'}>
              <img src={item} alt={item} width={150} height={100} />
              <ModalUploadRoom />
            </Space>
          </div>
        );
      },
    },
    {
      title: <div style={{ paddingLeft: '8px' }}>Mô tả</div>,
      dataIndex: 'moTa',
      width: 330,
      render: (item, _, index) => {
        return (
          <div key={index}>
            <p style={{ textOverflow: 'ellipsis', padding: '0 8px' }}>{item}</p>
          </div>
        );
      },
    },
    {
      title: <div className='text-center'>Giá tiền</div>,
      dataIndex: 'giaTien',
      render: (item, _, index) => (
        <div key={index} className='text-center'>
          {item}&nbsp;$
        </div>
      ),
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
    dispatch(getAllRoomApi());
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={arrAllRoom}
      size='middle'
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
      }}
      scroll={scroll}
    />
  );
}
