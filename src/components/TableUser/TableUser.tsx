import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  getAllUserApi,
  UserModal,
} from '../../redux/reducer/managementUserReducer';
import moment from 'moment';

type Props = {};

const onDelete = (record: UserModal) => {
  console.log(record.id);
};
const onEdit = (record: UserModal) => {
  console.log(record.id);
};

const columns: ColumnsType<UserModal> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'birthday',
    key: 'birthday',
    render: (birthday) => (
      <span>
        {moment().diff(moment(birthday, 'DD/MM/ YYYY'), 'years') && ''}
      </span>
    ),
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (role) => {
      let color = 'geekblue';
      if (role === 'ADMIN') {
        color = 'volcano';
      }
      return (
        <Tag color={color} key={role}>
          {role.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
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

export default function TableUser({}: Props) {
  const { arrUser } = useSelector(
    (state: RootState) => state.managementUserReducer
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);

  return <Table columns={columns} dataSource={arrUser} pagination={{pageSize:10}} />;
}
