import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table } from 'antd';
import React, { useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { BookRoomModel } from '../../redux/reducer/RoomReducer';
import { deleteBookingByIdApi, getAllBookingApi, getBookingByIdApi } from '../../redux/reducer/managementBookingReducer';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

type Props = {};

const scroll: { y?: number | string } = {};
scroll.y = 580;

export default function TableBooking({}: Props) {
  const { arrBooking } = useSelector(
    (state: RootState) => state.managementBookingReducer
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = ({ id }:any) => {
    dispatch(deleteBookingByIdApi(id))
  };
  const onEdit = ({ id }:any) => {
    // dispatch(getBookingByIdApi(id));
    navigate(`/admin/edit-booking/${id}`)
  };

  const columns: ColumnsType<BookRoomModel> = [
    {
      title: 'Mã phòng',
      dataIndex: 'maPhong',
    },
    {
      title: 'Ngày đến',
      dataIndex: 'ngayDen',
      render: (item, _, index) => {
        return <div key={index}>{moment(item).format('DD/MM/YYYY')}</div>;
      },
    },
    {
      title: 'Ngày đi',
      dataIndex: 'ngayDi',
      render: (item, _, index) => {
        return <div key={index}>{moment(item).format('DD/MM/YYYY')}</div>;
      },
    },
    {
      title: 'Số lượng khách',
      dataIndex: 'soLuongKhach',
      responsive: ['md'],
    },
    {
      title: 'Mã người dùng',
      dataIndex: 'maNguoiDung',
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
    dispatch(getAllBookingApi());
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={arrBooking}
      size='middle'
      pagination={{
        pageSize: 10,
        showSizeChanger: false,
      }}
      scroll={scroll}
    />
  );
}
