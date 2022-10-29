import React, { useEffect } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  DeleteOutlined,
  EditOutlined,
  ManOutlined,
  WomanOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  deleteUserApi,
  getAllUserApi,
  UserModal,
} from '../../redux/reducer/managementUserReducer';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

type Props = {};

const scroll: { y?: number | string } = {};
scroll.y = 580;

export default function TableUser({}: Props) {
  const { arrUser } = useSelector(
    (state: RootState) => state.managementUserReducer
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const columns: ColumnsType<UserModal> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (text,_,index) => <div key={index}>{text}</div>,
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,_,index) => <div key={index}>{text}</div>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
      // render:(birthday)=><div>{moment(birthday).format('MM/DD/YYYY')?moment(birthday).format('MM/DD/YYYY'):''}</div>
      // render: (birthday) => (
      //   <span>
      //     {moment().diff(moment(birthday, 'DD/MM/ YYYY'), 'years')
      //       ? moment().diff(moment(birthday, 'DD/MM/ YYYY'), 'years')
      //       : ''}
      //   </span>
      // ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender,_, index) => {
        return gender ? (
          <span key={index}>
            <ManOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
            male
          </span>
        ) : (
          <span key={index}>
            <WomanOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
            female
          </span>
        );
      },
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
      render: (_, record,index) => (
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

  const onDelete = ({id}:UserModal) => {
    dispatch(deleteUserApi(id));
  };
  const onEdit = ({id}:UserModal) => {
    navigate(`/admin/edit-user/${id}`)
    // console.log(id);
  };

  useEffect(() => {
    dispatch(getAllUserApi());
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={arrUser}
      pagination={{ pageSize: 15, showSizeChanger: false }}
      scroll={scroll}
    />
  );
}
